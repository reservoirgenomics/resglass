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

    this.pubSub.publish('app.click', {
      type: '1d-annotations',
      event: null,
      payload: rects,
    });

    if (!rects.length) {
      this.selectRect(null);
    } else {
      this.selectRect(rects[0].value.uid);
    }
  }

  render() {
    super.render();
  }
}

export default Annotations1dTrack;
