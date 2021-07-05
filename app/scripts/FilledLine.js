import { scaleLinear } from 'd3-scale';
import HorizontalLine1DPixiTrack from './HorizontalLine1DPixiTrack';
import { colorToHex } from './utils';

class FilledLine extends HorizontalLine1DPixiTrack {
  drawRange(tile, row, tileXScale, offsetValue) {
    const tileValues = tile.tileData.dense;
    // draw a single row from this matrix
    let currentSegment = [];
    let mv = 0;

    for (let i = 0; i < tile.tileData.shape[1]; i++) {
      const rowStart = row * tile.tileData.shape[1];
      const pos = rowStart + i;

      if (tileValues[pos] > mv) {
        mv = tileValues[pos];
      }
      const xPos = this._xScale(tileXScale(i));
      const yPos = this.valueScale(tileValues[pos] + offsetValue);

      if (
        (this.options.valueScaling === 'log' && tileValues[pos] === 0) ||
        Number.isNaN(yPos)
      ) {
        if (currentSegment.length > 1) {
          tile.segments.push(currentSegment);
        }
        // Just ignore 1-element segments.
        currentSegment = [];
        continue;
      }

      if (tileXScale(i) > this.tilesetInfo.max_pos[0]) {
        // Data is in the last tile and extends beyond the coordinate system.
        break;
      }

      currentSegment.push([xPos, yPos]);
    }
    if (currentSegment.length > 1) {
      tile.segments.push(currentSegment);
    }
  }

  drawTile(tile) {
    super.drawTile(tile);

    if (!tile.graphics) {
      return;
    }

    if (!tile.tileData || !tile.tileData.dense) {
      return;
    }

    const graphics = tile.graphics;

    const { tileX, tileWidth } = this.getTilePosAndDimensions(
      tile.tileData.zoomLevel,
      tile.tileData.tilePos,
      tile.tileData.shape[1],
    );

    const tileValues = tile.tileData.dense;

    if (tileValues.length === 0) {
      return;
    }

    const [vs, offsetValue] = this.makeValueScale(
      this.minValue(),
      this.medianVisibleValue,
      this.maxValue(),
    );

    this.valueScale = vs;

    graphics.clear();

    this.drawAxis(this.valueScale);

    if (
      this.options.valueScaling === 'log' &&
      this.valueScale.domain()[1] < 0
    ) {
      console.warn(
        'Negative values present when using a log scale',
        this.valueScale.domain(),
      );
      return;
    }

    const stroke = colorToHex(
      this.options.lineStrokeColor ? this.options.lineStrokeColor : 'blue',
    );
    // this scale should go from an index in the data array to
    // a position in the genome coordinates
    if (!this.tilesetInfo.tile_size && !this.tilesetInfo.bins_per_dimension) {
      console.warn(
        'No tileset_info.tile_size or tileset_info.bins_per_dimension',
        this.tilesetInfo,
      );
    }

    const tileSize =
      this.tilesetInfo.tile_size || this.tilesetInfo.bins_per_dimension;

    const tileXScale = scaleLinear()
      .domain([0, tileSize])
      .range([tileX, tileX + tileWidth]);

    const strokeWidth = this.options.lineStrokeWidth
      ? this.options.lineStrokeWidth
      : 1;
    graphics.lineStyle(strokeWidth, stroke, 1);

    tile.segments = [];

    const minYs = [];
    const maxYs = [];
    const xs = [];

    for (let i = 0; i < tile.tileData.shape[0]; i++) {
      // for (let i = 0; i < 1; i++) {
      this.drawRange(tile, i, tileXScale, offsetValue);
    }

    for (let j = 0; j < tile.tileData.shape[1]; j++) {
      minYs.push(Number.MAX_SAFE_INTEGER);
      maxYs.push(-Number.MAX_SAFE_INTEGER);
      xs.push(this._xScale(tileXScale(j)));
    }

    // find minimum and maximum values
    for (const segment of tile.segments) {
      let counter = 0;

      const first = segment[0];

      if (first[1] < minYs[counter]) minYs[counter] = first[1];
      if (first[1] > maxYs[counter]) maxYs[counter] = first[1];

      const rest = segment.slice(1);
      for (const point of rest) {
        counter += 1;

        if (point[1] < minYs[counter]) minYs[counter] = point[1];
        if (point[1] > maxYs[counter]) maxYs[counter] = point[1];
      }
    }

    // console.log('minYs', minYs);
    // console.log('maxYs', maxYs);

    // we have to do something funky here to make sure that
    // discontinuous sections are rendered as such
    let startI = 0;

    const color = this.options.fillColor || 'grey';
    const colorHex = colorToHex(color);

    const opacity =
      'fillOpacity' in this.options ? this.options.fillOpacity : 0.5;

    while (startI < xs.length) {
      graphics.beginFill(colorHex, opacity);
      graphics.moveTo(xs[startI], minYs[startI]);
      // draw a filled area around the whole region
      let i = startI + 1;

      for (; i < xs.length; i++) {
        if (minYs[i] < Number.MAX_SAFE_INTEGER)
          graphics.lineTo(xs[i], minYs[i]);
        else break;
      }

      for (let j = i; j >= startI; j--) {
        if (maxYs[j] > -Number.MAX_SAFE_INTEGER) {
          // console.log('to', xs[i], maxYs[i]);
          graphics.lineTo(xs[j], maxYs[j]);
        }
      }

      graphics.endFill();

      while (minYs[i] === Number.MAX_SAFE_INTEGER && i < xs.length) i++;
      startI = i;
    }

    // draw the boundary values
    for (const segment of tile.segments) {
      const first = segment[0];
      const rest = segment.slice(1);
      graphics.moveTo(first[0], first[1]);
      for (const point of rest) {
        graphics.lineTo(point[0], point[1]);
      }
    }
  }
}

export default FilledLine;
