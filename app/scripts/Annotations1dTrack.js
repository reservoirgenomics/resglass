import { color } from 'd3-color';
import polygonArea from 'area-polygon';
import classifyPoint from 'robust-point-in-polygon';

import BedLikeTrack, { polyToPoly } from './BedLikeTrack';

// Maximum delay in ms between mousedown and mouseup that is registered as a
// click. Note we need to use mousedown and mouseup as PIXI doesn't recognize
// click events with out current setup. Since most UIs treat long clicks as
// either something special or a cancelation we follow best practices and
// implement a threshold on the delay as well.
import { GLOBALS, MAX_CLICK_DELAY } from './configs';

/** Find out which rects are under a point.
 *
 * @param  {track} The track object
 * @param  {x} x position to check (relative to track)
 * @param  {y} y position to check (relative to track)
 * @return {[]} An array of drawnRects that are under that point
 */
export const rectsAtPoint = (track, x, y) => {
  const drawnRects = Object.values(track.drawnRects);
  const point = [x, y];
  const payloads = [];
  const g = track.rectGraphics;

  for (const drawnRect of drawnRects) {
    // copy the rect because polyToPoly is destructive
    const rect = drawnRect[0].slice(0);

    const poly = polyToPoly(
      rect,
      g.scale.x,
      g.position.x,
      g.scale.y,
      g.position.y,
    );
    const area = polygonArea(poly);

    if (classifyPoint(poly, point) === -1) {
      const payload = drawnRect[1];
      payload.area = area;

      payloads.push(payload);
    }
  }

  return payloads;
};

/**
 * Event handler for when an item is clicked on
 */
export const clickFunc = (evt, track, trackType) => {
  const point = [
    evt.data.global.x - track.pMain.position.x,
    evt.data.global.y - track.pMain.position.y,
  ];

  const payloads = rectsAtPoint(track, point[0], point[1]);

  payloads.sort((a, b) => a.area - b.area);

  if (payloads.length) {
    track.selectRect(payloads[0].value.uid);

    track.pubSub.publish('app.click', {
      type: trackType,
      event: evt,
      payload: payloads,
    });
  }

  // track.pubSub.publish('app.click', {
  //   type: 'bedlike',
  //   event,
  // });
};

class Annotations1dTrack extends BedLikeTrack {
  constructor(context, options, isVertical) {
    super(context, options);
  }

  /**
   * @param  {x} x position of the evt relative to the track
   * @param  {y} y position of the evt relative to the track
   */
  click(x, y) {
    const rects = rectsAtPoint(this, x, y);

    if (!rects.length) {
      this.selectRect(null);
    }
  }

  render() {
    super.render();

    this.rectGraphics.interactive = true;
    this.rectGraphics.buttonMode = true;
    this.rectGraphics.mouseup = evt => clickFunc(evt, this, 'bedlike');
  }
}

export default Annotations1dTrack;
