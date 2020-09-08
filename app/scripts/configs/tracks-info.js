import { THEME_DARK } from './themes';

import {
  svg1DAxisIcon,
  svg1DTilesIcon,
  svg2DHeatmapIcon,
  svg2DTilesIcon,
  svgArrowheadDomainsIcon,
  svgGeneAnnotationsIcon,
  svgHorizontalLineIcon,
  svgHorizontal1dHeatmap,
  svgVertical1DAxisIcon,
  svgVertical1DTilesIcon,
  svgGeoMapIcon,
} from '../icons';

const osm = {
  type: 'osm-tiles',
  datatype: ['map-tiles'],
  local: true,
  orientation: '2d',
  hidden: true,
  name: 'OSM Tiles',
  thumbnail: svgGeoMapIcon,
  availableOptions: [
    'minPos',
    'maxPos',
    'maxZoom',
    'labelPosition',
    'labelLeftMargin',
    'labelRightMargin',
    'labelTopMargin',
    'labelBottomMargin',
    'name',
  ],
  defaultOptions: {
    minPos: -180,
    maxPos: 180,
    maxZoom: 19,
    labelPosition: 'bottomRight',
    labelLeftMargin: 0,
    labelRightMargin: 0,
    labelTopMargin: 0,
    labelBottomMargin: 0,
  },
};

const mapbox = {
  type: 'mapbox-tiles',
  datatype: ['map-tiles'],
  local: true,
  orientation: '2d',
  hidden: true,
  name: 'Mapbox Tiles',
  thumbnail: svgGeoMapIcon,
  availableOptions: [
    'style',
    'labelPosition',
    'labelLeftMargin',
    'labelRightMargin',
    'labelTopMargin',
    'labelBottomMargin',
    'name',
  ],
  defaultOptions: {
    style: 'mapbox.streets',
    labelPosition: 'bottomRight',
    labelLeftMargin: 0,
    labelRightMargin: 0,
    labelTopMargin: 0,
    labelBottomMargin: 0,
  },
};

export const TRACKS_INFO = [
  osm,
  Object.assign({}, osm, {
    type: 'osm',
  }),
  mapbox,
  Object.assign({}, mapbox, {
    type: 'mapbox',
  }),
  {
    type: 'left-axis',
    datatype: ['axis'],
    local: true,
    orientation: '1d-vertical',
    name: 'Left Axis',
    thumbnail: svgVertical1DAxisIcon,
    availableOptions: ['minWidth'],
    defaultOptions: {
      minWidth: 100,
    },
  },
  {
    type: 'top-axis',
    datatype: ['axis'],
    local: true,
    orientation: '1d-horizontal',
    name: 'Top Axis',
    thumbnail: svg1DAxisIcon,
    defaultOptions: {},
  },
  {
    type: 'horizontal-rule',
    datatype: ['x-coord'],
    local: true,
    orientation: 'whole',
    name: 'Horizontal Rule',
    thumbnail: null,
    availableOptions: ['color'],
    defaultOptions: {
      color: 'black',
    },
  },
  {
    type: 'vertical-rule',
    datatype: ['y-coord'],
    local: true,
    orientation: 'whole',
    name: 'Vertical Rule',
    thumbnail: null,
    availableOptions: ['color'],
    defaultOptions: {
      color: 'black',
    },
  },
  {
    type: 'cross-rule',
    datatype: ['xy-coord'],
    local: true,
    orientation: 'whole',
    name: 'Cross Rule',
    thumbnail: null,
    availableOptions: ['color'],
    defaultOptions: {
      color: 'black',
    },
  },
  {
    type: 'simple-svg',
    datatype: [],
    local: false,
    orientation: '2d',
    exportable: true,
    availableOptions: ['minWidth', 'minHeight'],
    defaultOptions: {
      minWidth: 100,
      minHeight: 100,
    },
  },
  {
    type: 'heatmap',
    datatype: ['matrix'],
    local: false,
    orientation: '2d',
    thumbnail: svg2DHeatmapIcon,
    exportable: true,
    availableOptions: [
      'backgroundColor',
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelShowResolution',
      'labelShowAssembly',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'colorRange',
      'colorbarBackgroundColor',
      'maxZoom',
      'minWidth',
      'minHeight',
      'dataTransform',
      'colorbarPosition',
      'trackBorderWidth',
      'trackBorderColor',
      'heatmapValueScaling',
      'showMousePosition',
      'mousePositionColor',
      'showTooltip',
      'extent',
      'zeroValueColor',
    ],
    defaultOptions: {
      backgroundColor: '#eeeeee',
      labelPosition: 'bottomRight',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      labelShowResolution: true,
      labelShowAssembly: true,
      colorRange: [
        // corresponding to the fall colormap
        'white',
        'rgba(245,166,35,1.0)',
        'rgba(208,2,27,1.0)',
        'black',
      ],
      colorbarBackgroundColor: '#ffffff',
      maxZoom: null,
      minWidth: 100,
      minHeight: 100,
      colorbarPosition: 'topRight',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      heatmapValueScaling: 'log',
      showMousePosition: false,
      mousePositionColor: '#000000',
      showTooltip: false,
      extent: 'full',
      zeroValueColor: null,
    },
    defaultOptionsByTheme: {
      [THEME_DARK]: {
        backgroundColor: '#000000',
        colorRange: [
          // corresponding to the inverted fall colormap
          'black',
          'rgba(208,2,27,1.0)',
          'rgba(245,166,35,1.0)',
          'white',
        ],
        colorbarBackgroundColor: '#000000',
        labelColor: '#ffffff',
        labelBackgroundColor: '#000000',
        trackBorderColor: '#ffffff',
        mousePositionColor: '#ffffff',
      },
    },
  },
  {
    type: 'linear-heatmap',
    aliases: ['horizontal-heatmap', 'vertical-heatmap'],
    datatype: ['matrix'],
    local: false,
    orientation: '1d-horizontal',
    rotatable: true,
    thumbnail: svg2DHeatmapIcon,
    defaultOptions: {
      backgroundColor: '#eeeeee',
      labelPosition: 'bottomRight',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      labelShowResolution: true,
      labelShowAssembly: true,
      labelColor: 'black',
      colorRange: [
        // corresponding to the fall colormap
        'white',
        'rgba(245,166,35,1.0)',
        'rgba(208,2,27,1.0)',
        'black',
      ],
      maxZoom: null,
      minWidth: 100,
      minHeight: 40,
      trackBorderWidth: 0,
      trackBorderColor: 'black',
    },
    availableOptions: [
      'backgroundColor',
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelShowResolution',
      'labelShowAssembly',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'colorRange',
      'maxZoom',
      'minWidth',
      'minHeight',
      'dataTransform',
      'oneDHeatmapFlipped',
      'colorbarPosition',
      'trackBorderWidth',
      'trackBorderColor',
      'heatmapValueScaling',
    ],
  },
  {
    type: 'line',
    aliases: ['horizontal-line', 'vertical-line'],
    datatype: ['vector'],
    local: false,
    orientation: '1d-horizontal',
    rotatable: true,
    thumbnail: svgHorizontalLineIcon,
    availableOptions: [
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelShowResolution',
      'labelShowAssembly',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundColor',
      'labelBackgroundOpacity',
      'axisLabelFormatting',
      'axisPositionHorizontal',
      'axisMargin',
      'lineStrokeWidth',
      'lineStrokeColor',
      'valueScaling',
      'valueScaleMin',
      'valueScaleMax',
      'trackBorderWidth',
      'trackBorderColor',
      'trackType',
      'showMousePosition',
      'showTooltip',
      'mousePositionColor',
      'aggregationMode',
      'minHeight',
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'topLeft',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      labelBackgroundColor: 'white',
      labelShowResolution: false,
      labelShowAssembly: true,
      axisLabelFormatting: 'scientific',
      axisPositionHorizontal: 'right',
      lineStrokeColor: 'blue',
      lineStrokeWidth: 1,
      valueScaling: 'linear',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      labelTextOpacity: 0.4,
      showMousePosition: false,
      minHeight: 20,
      mousePositionColor: '#000000',
      showTooltip: false,
    },
    defaultOptionsByTheme: {
      [THEME_DARK]: {
        labelColor: '#ffffff',
        labelBackgroundColor: '#000000',
        trackBorderColor: '#ffffff',
        mousePositionColor: '#ffffff',
      },
    },
  },
  {
    type: '1d-heatmap',
    aliases: ['horizontal-1d-heatmap', 'vertical-1d-heatmap'],
    datatype: ['vector'],
    local: false,
    orientation: '1d-horizontal',
    rotatable: true,
    thumbnail: svgHorizontal1dHeatmap,
    availableOptions: [
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelShowResolution',
      'labelShowAssembly',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'axisPositionHorizontal',
      'axisMargin',
      'colorRange',
      'valueScaling',
      'trackBorderWidth',
      'trackBorderColor',
      'trackType',
      'showMousePosition',
      'showTooltip',
      'mousePositionColor',
      'aggregationMode',
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'topLeft',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      labelShowResolution: false,
      labelShowAssembly: true,
      axisPositionHorizontal: 'right',
      colorRange: [
        // corresponding to the fall colormap
        'white',
        'rgba(245,166,35,1.0)',
        'rgba(208,2,27,1.0)',
        'black',
      ],
      valueScaling: 'linear',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      labelTextOpacity: 0.4,
      showMousePosition: false,
      mousePositionColor: '#000000',
      showTooltip: false,
    },
  },
  {
    type: 'vector-heatmap',
    aliases: ['horizontal-vector-heatmap', 'vertical-vector-heatmap'],
    datatype: ['vector'],
    local: false,
    orientation: '1d-horizontal',
    rotatable: true,
    minHeight: 1,
    thumbnail: null,
    availableOptions: [
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelShowResolution',
      'labelShowAssembly',
      'labelColor',
      'valueScaling',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'colorRange',
      'trackBorderWidth',
      'trackBorderColor',
      'trackType',
      'heatmapValueScaling',
    ],
    defaultOptions: {
      labelPosition: 'topLeft',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      labelShowResolution: false,
      labelShowAssembly: true,
      labelColor: 'black',
      labelTextOpacity: 0.4,
      valueScaling: 'linear',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      heatmapValueScaling: 'log',
    },
  },
  {
    type: 'multivec',
    aliases: ['horizontal-multivec', 'vertical-multivec'],
    datatype: ['multivec'],
    local: false,
    orientation: '1d-horizontal',
    rotatable: true,
    thumbnail: null,
    availableOptions: [
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelShowResolution',
      'labelShowAssembly',
      'labelColor',
      'minHeight',
      'valueScaling',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'colorRange',
      'trackBorderWidth',
      'trackBorderColor',
      'trackType',
      'heatmapValueScaling',
      'selectRows',
      'selectRowsAggregationMode',
      'selectRowsAggregationWithRelativeHeight',
      'colorbarBackgroundColor',
      'colorbarPosition',
      'zeroValueColor',
    ],
    defaultOptions: {
      labelPosition: 'topLeft',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      labelShowResolution: true,
      labelShowAssembly: true,
      labelColor: 'black',
      labelTextOpacity: 0.4,
      minHeight: 100,
      valueScaling: 'linear',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      heatmapValueScaling: 'log',
      selectRows: null,
      selectRowsAggregationMode: 'mean',
      selectRowsAggregationWithRelativeHeight: true,
      colorbarBackgroundColor: '#ffffff',
      colorbarPosition: 'topRight',
      zeroValueColor: null,
    },
    defaultOptionsByTheme: {
      [THEME_DARK]: {
        colorbarBackgroundColor: '#000000',
      },
    },
  },
  {
    type: 'point',
    aliases: ['horizontal-point', 'vertical-point'],
    datatype: ['vector'],
    local: false,
    orientation: '1d-horizontal',
    rotatable: true,
    availableOptions: [
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelShowResolution',
      'labelShowAssembly',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'axisLabelFormatting',
      'axisPositionHorizontal',
      'axisMargin',
      'pointColor',
      'pointSize',
      'valueScaling',
      'trackBorderWidth',
      'trackBorderColor',
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'topLeft',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      labelShowResolution: false,
      labelShowAssembly: true,
      axisLabelFormatting: 'scientific',
      axisPositionHorizontal: 'right',
      pointColor: 'red',
      pointSize: 3,
      valueScaling: 'linear',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      labelTextOpacity: 0.4,
    },
  },
  {
    type: 'divergent-bar',
    aliases: ['horizontal-divergent-bar', 'vertical-divergent-bar'],
    datatype: ['vector'],
    local: false,
    orientation: '1d-horizontal',
    rotatable: true,
    availableOptions: [
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelShowResolution',
      'labelShowAssembly',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'axisLabelFormatting',
      'axisPositionHorizontal',
      'axisMargin',
      'barFillColorTop',
      'barFillColorBottom',
      'valueScaling',
      'trackBorderWidth',
      'trackBorderColor',
      'barOpacity',
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'topLeft',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      labelShowResolution: false,
      labelShowAssembly: true,
      axisPositionHorizontal: 'right',
      axisLabelFormatting: 'scientific',
      barFillColorBottom: 'red',
      barFillColorTop: 'green',
      valueScaling: 'linear',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      labelTextOpacity: 0.4,
      barOpacity: 1,
    },
  },
  {
    type: 'bar',
    aliases: ['horizontal-bar', 'vertical-bar'],
    datatype: ['vector'],
    local: false,
    orientation: '1d-horizontal',
    rotatable: true,
    availableOptions: [
      'align',
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelShowResolution',
      'labelShowAssembly',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'axisLabelFormatting',
      'axisPositionHorizontal',
      'axisMargin',
      'barFillColor',
      'colorRange',
      'colorRangeGradient',
      'valueScaling',
      'valueScaleMin',
      'valueScaleMax',
      'trackBorderWidth',
      'trackBorderColor',
      'barOpacity',
      'showMousePosition',
      'showTooltip',
      'aggregationMode',
      'zeroLineVisible',
      'zeroLineColor',
      'zeroLineOpacity',
    ],
    defaultOptions: {
      align: 'bottom',
      labelColor: '[glyph-color]',
      labelPosition: 'topLeft',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      labelShowResolution: false,
      labelShowAssembly: true,
      axisLabelFormatting: 'scientific',
      axisPositionHorizontal: 'right',
      barFillColor: 'darkgreen',
      valueScaling: 'linear',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      labelTextOpacity: 0.4,
      barOpacity: 1,
    },
  },
  {
    type: '2d-tiles',
    datatype: ['matrix'],
    local: false,
    orientation: '2d',
    name: '2D Tile Outlines',
    thumbnail: svg2DTilesIcon,
  },

  {
    type: '1d-value-interval',
    aliases: ['horizontal-1d-value-interval', 'vertical-1d-value-interval'],
    datatype: ['bed-value'],
    local: false,
    orientation: ['1d-horizontal'],
    rotatable: true,
    name: '1D Rectangles',
    availableOptions: [
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'axisPositionHorizontal',
      'axisMargin',
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'bottomLeft',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      axisPositionHorizontal: 'left',
      lineStrokeColor: 'blue',
      valueScaling: 'linear',
    },
  },
  {
    type: 'stacked-interval',
    aliases: ['top-stacked-interval', 'left-stacked-interval'],
    datatype: ['stacked-interval'],
    local: false,
    orientation: '1d-horizontal',
    rotatable: true,
    thumbnail: 'horizontal-stacked-interval.png',
    availableOptions: [
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
    ],
  },
  {
    type: 'viewport-projection-vertical',
    datatype: ['1d-projection'],
    local: true,
    hidden: true,
    orientation: '1d-vertical',
    name: 'Viewport Projection',
    thumbnail: 'viewport-projection-center.png',
    availableOptions: [
      'projectionFillColor',
      'projectionStrokeColor',
      'strokeWidth',
    ],
    defaultOptions: {
      projectionFillColor: '#777',
      projectionStrokeColor: '#777',
      projectionFillOpacity: 0.3,
      projectionStrokeOpacity: 0.7,
      strokeWidth: 1,
    },
  },
  {
    type: 'viewport-projection-horizontal',
    datatype: ['1d-projection'],
    local: true,
    hidden: true,
    orientation: '1d-horizontal',
    name: 'Viewport Projection',
    thumbnail: 'viewport-projection-center.png',
    availableOptions: [
      'projectionFillColor',
      'projectionStrokeColor',
      'strokeWidth',
    ],
    defaultOptions: {
      projectionFillColor: '#777',
      projectionStrokeColor: '#777',
      projectionFillOpacity: 0.3,
      projectionStrokeOpacity: 0.7,
      strokeWidth: 1,
    },
  },
  {
    type: 'viewport-projection-center',
    datatype: ['2d-projection'],
    local: true,
    hidden: true,
    orientation: '2d',
    name: 'Viewport Projection',
    thumbnail: 'viewport-projection-center.png',
    availableOptions: [
      'projectionFillColor',
      'projectionStrokeColor',
      'strokeWidth',
    ],
    defaultOptions: {
      projectionFillColor: '#777',
      projectionStrokeColor: '#777',
      projectionFillOpacity: 0.3,
      projectionStrokeOpacity: 0.7,
      strokeWidth: 1,
    },
  },
  {
    type: 'gene-annotations',
    aliases: ['horizontal-gene-annotations', 'vertical-gene-annotations'],
    datatype: ['gene-annotation'],
    local: false,
    defaultHeight: 90,
    orientation: '1d-horizontal',
    name: 'Gene Annotations',
    thumbnail: svgGeneAnnotationsIcon,
    availableOptions: [
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundColor',
      'labelBackgroundOpacity',
      'minHeight',
      'plusStrandColor',
      'minusStrandColor',
      'trackBorderWidth',
      'trackBorderColor',
      'showMousePosition',
      'mousePositionColor',
      'fontSize',
      'geneAnnotationHeight',
      'geneLabelPosition',
      'geneStrandSpacing',
    ],
    defaultOptions: {
      fontSize: 10,
      labelColor: 'black',
      labelBackgroundColor: '#ffffff',
      labelPosition: 'hidden',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      minHeight: 24,
      plusStrandColor: 'blue',
      minusStrandColor: 'red',
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      showMousePosition: false,
      mousePositionColor: '#000000',
      geneAnnotationHeight: 16,
      geneLabelPosition: 'outside',
      geneStrandSpacing: 4,
    },
    defaultOptionsByTheme: {
      [THEME_DARK]: {
        labelColor: '#ffffff',
        labelBackgroundColor: '#000000',
        trackBorderColor: '#ffffff',
        mousePositionColor: '#ffffff',
        plusStrandColor: '#40a0ff',
      },
    },
  },
  {
    type: 'arrowhead-domains',
    datatype: ['arrowhead-domains'],
    local: false,
    orientation: '2d',
    name: 'Arrowhead Domains',
    thumbnail: svgArrowheadDomainsIcon,
    availableOptions: [
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'trackBorderWidth',
      'trackBorderColor',
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'hidden',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      trackBorderWidth: 0,
      trackBorderColor: 'black',
    },
  },
  {
    type: 'linear-2d-rectangle-domains',
    aliases: [
      'horizontal-2d-rectangle-domains',
      'vertical-2d-rectangle-domains',
    ],
    datatype: ['2d-rectangle-domains'],
    local: false,
    orientation: '1d-horizontal',
    rotatable: true,
    name: 'Horizontal 2D Rectangle Domains',
    thumbnail: svgArrowheadDomainsIcon,
    availableOptions: [
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'trackBorderWidth',
      'trackBorderColor',
      'rectangleDomainFillColor',
      'rectangleDomainStrokeColor',
      'rectangleDomainOpacity',
      'minSquareSize',
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'bottomLeft',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      rectangleDomainFillColor: 'grey',
      rectangleDomainStrokeColor: 'black',
      rectangleDomainOpacity: 0.6,
      minSquareSize: 'none',
    },
  },
  {
    type: '2d-rectangle-domains',
    datatype: ['2d-rectangle-domains'],
    local: false,
    orientation: '2d',
    name: '2D Rectangle Domains',
    thumbnail: svgArrowheadDomainsIcon,
    availableOptions: [
      'flipDiagonal',
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'trackBorderWidth',
      'trackBorderColor',
      'rectangleDomainFillColor',
      'rectangleDomainStrokeColor',
      'rectangleDomainOpacity',
      'minSquareSize',
    ],
    defaultOptions: {
      flipDiagonal: 'none',
      labelColor: 'black',
      labelPosition: 'hidden',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      rectangleDomainFillColor: 'grey',
      rectangleDomainStrokeColor: 'black',
      rectangleDomainOpacity: 0.6,
      minSquareSize: 'none',
    },
  },
  {
    type: 'horizontal-1d-annotations',
    datatype: ['nothing'], // Unfortunately one has to specify something here
    local: false,
    orientation: '1d-horizontal',
    name: 'Horizontal 1D Annotations',
    thumbnail: null,
    availableOptions: [
      'fill',
      'fillOpacity',
      'stroke',
      'strokeOpacity',
      'strokeWidth',
      'strokePos',
      'regions',
    ],
    defaultOptions: {
      fill: 'red',
      fillOpacity: 0.2,
      stroke: 'red',
      strokeOpacity: 0,
      strokeWidth: 1,
      regions: [],
      strokePos: [],
    },
  },
  {
    type: 'vertical-1d-annotations',
    datatype: ['nothing'], // Unfortunately one has to specify something here
    local: false,
    orientation: '1d-vertical',
    name: 'Vertical 1D Annotations',
    thumbnail: null,
    availableOptions: [
      'fill',
      'fillOpacity',
      'stroke',
      'strokeOpacity',
      'regions',
    ],
    defaultOptions: {
      fill: 'red',
      fillOpacity: '0.2',
      stroke: 'red',
      strokeOpacity: '0',
      regions: [],
    },
  },
  {
    type: '2d-annotations',
    datatype: ['2d-annotations'],
    local: false,
    orientation: '2d',
    name: '2D Annotations',
    thumbnail: svgArrowheadDomainsIcon,
    availableOptions: [
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelColor',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'trackBorderWidth',
      'trackBorderColor',
      'rectangleDomainFillColor',
      'rectangleDomainStrokeColor',
      'rectangleDomainOpacity',
      'minSquareSize',
      'isClickable',
      'hoverColor',
      'selectColor',
      'exclude',
      'trackBorderBgWidth',
      'trackBorderBgColor',
      'trackBorderBgAlpha',
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'hidden',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      rectangleDomainFillColor: 'grey',
      rectangleDomainStrokeColor: 'black',
      rectangleDomainOpacity: 0.6,
      rectanlgeMinSize: 1,
      polygonMinBoundingSize: 0,
      minSquareSize: 'none',
      isClickable: false,
      hoverColor: 'orange',
      selectColor: 'fuchsia',
      exclude: [],
      trackBorderBgWidth: 0,
      trackBorderBgColor: 'black',
      trackBorderBgAlpha: 0.33,
    },
  },
  {
    type: 'square-markers',
    datatype: ['bedpe'],
    local: false,
    orientation: '2d',
    name: 'Square Markers',
    thumbnail: svgArrowheadDomainsIcon,
    availableOptions: [
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'labelColor',
    ],
    defaultOptions: {
      labelColor: 'black',
      labelPosition: 'hidden',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      trackBorderWidth: 0,
      trackBorderColor: 'black',
    },
  },
  {
    type: 'combined',
    datatype: 'any',
    local: true,
    orientation: 'any',
  },
  {
    type: 'horizontal-chromosome-grid',
    datatype: ['chromsizes'],
    local: false,
    orientation: '1d-horizontal',
    name: 'Chromosome Grid',
    chromInfoPath: '//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv',
    thumbnail: null,
    availableOptions: [
      'lineStrokeWidth',
      'lineStrokeColor',
      'showMousePosition',
    ],
    defaultOptions: {
      lineStrokeWidth: 1,
      lineStrokeColor: 'grey',
      showMousePosition: false,
    },
  },
  {
    type: 'vertical-chromosome-grid',
    datatype: ['chromsizes'],
    local: false,
    orientation: '1d-vertical',
    name: 'Chromosome Grid',
    chromInfoPath: '//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv',
    thumbnail: null,
    availableOptions: [
      'lineStrokeWidth',
      'lineStrokeColor',
      'showMousePosition',
    ],
    defaultOptions: {
      lineStrokeWidth: 1,
      lineStrokeColor: 'grey',
      showMousePosition: false,
    },
  },
  {
    type: '2d-chromosome-grid',
    datatype: ['chromsizes'],
    local: false,
    orientation: '2d',
    name: 'Chromosome Grid',
    chromInfoPath: '//s3.amazonaws.com/pkerp/data/hg19/chromSizes.tsv',
    thumbnail: null,
    availableOptions: ['lineStrokeWidth', 'lineStrokeColor'],
    defaultOptions: {
      lineStrokeWidth: 1,
      lineStrokeColor: 'grey',
    },
  },
  {
    type: '2d-chromosome-annotations',
    datatype: ['chromsizes'],
    local: true,
    orientation: '2d',
    name: '2D Chromosome Annotations',
    thumbnail: null,
    hidden: true,
  },
  {
    type: '2d-chromosome-labels',
    datatype: ['chromsizes'],
    local: true,
    orientation: '2d',
    name: 'Pairwise Chromosome Labels',
    thumbnail: null,
  },
  {
    type: 'chromosome-labels',
    aliases: ['horizontal-chromosome-labels', 'vertical-chromosome-labels'],
    datatype: ['chromsizes'],
    orientation: '1d-horizontal',
    rotatable: true,
    minHeight: 35,
    defaultHeight: 30,
    name: 'Chromosome Axis',
    thumbnail: null,
    availableOptions: [
      'color',
      'stroke',
      'fontSize',
      'fontIsLeftAligned',
      'showMousePosition',
      'mousePositionColor',
      'tickPositions',
      'tickFormat',
    ],
    defaultOptions: {
      color: '#808080',
      stroke: '#ffffff',
      fontSize: 12,
      fontIsLeftAligned: false,
      showMousePosition: false,
      mousePositionColor: '#000000',
    },
    defaultOptionsByTheme: {
      [THEME_DARK]: {
        color: '#808080',
        stroke: '#000000',
        mousePositionColor: '#ffffff',
      },
    },
  },
  {
    type: 'vertical-1d-tiles',
    datatype: ['1d-tiles'],
    local: false,
    orientation: '1d-vertical',
    name: 'Vertical 1D Tile Outlines',
    thumbnail: svgVertical1DTilesIcon,
  },
  {
    type: 'horizontal-1d-tiles',
    datatype: ['vector', 'stacked-interval', 'gene-annotation'],
    local: false,
    orientation: '1d-horizontal',
    name: 'Horizontal 1D Tile Outlines',
    thumbnail: svg1DTilesIcon,
  },
  {
    type: 'osm-2d-tile-ids',
    datatype: ['map-tiles'],
    local: false,
    orientation: '2d',
    name: 'OSM Tile Outlines',
    thumbnail: svg2DTilesIcon,
    availableOptions: [
      'minPos',
      'maxPos',
      'maxZoom',
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'name',
    ],
    defaultOptions: {
      minPos: -180,
      maxPos: 180,
      maxZoom: 19,
      labelPosition: 'bottomRight',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
    },
  },
  {
    type: 'raster-tiles',
    datatype: ['map-tiles'],
    local: true,
    orientation: '2d',
    hidden: true,
    name: 'Raster Tiles',
    thumbnail: svgGeoMapIcon,
    availableOptions: [
      'labelPosition',
      'labelLeftMargin',
      'labelRightMargin',
      'labelTopMargin',
      'labelBottomMargin',
      'name',
    ],
    defaultOptions: {
      labelPosition: 'bottomRight',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
    },
  },
  {
    type: 'image-tiles',
    datatype: ['image-tiles'],
    local: true,
    orientation: '2d',
    hidden: true,
    name: 'Image Tiles',
    thumbnail: null,
  },
  {
    type: 'bedlike',
    datatype: ['bedlike'],
    aliases: ['vertical-bedlike'],
    local: false,
    orientation: '1d-horizontal',
    rotatable: true,
    name: 'BED-like track',
    thumbnail: null,
    availableOptions: [
      'alternating',
      'annotationHeight',
      'annotationStyle',
      'fillColor',
      'fillOpacity',
      'fontColor',
      'fontSize',
      'minusStrandColor',
      'plusStrandColor',
      'labelBottomMargin',
      'labelColor',
      'labelLeftMargin',
      'labelPosition',
      'labelRightMargin',
      'labelTopMargin',
      'labelTextOpacity',
      'labelBackgroundOpacity',
      'maxAnnotationHeight',
      'minHeight',
      'trackBorderWidth',
      'trackBorderColor',
      'valueColumn',
      'colorEncoding',
      'colorRange',
      'colorEncodingRange',
      'separatePlusMinusStrands',
      'showTexts',
      'axisPositionHorizontal',
      'axisMargin',
    ],
    defaultOptions: {
      alternating: false,
      annotationStyle: 'box',
      fillColor: 'blue',
      fillOpacity: 0.3,
      fontSize: '10',
      axisPositionHorizontal: 'right',
      labelColor: 'black',
      labelPosition: 'hidden',
      labelLeftMargin: 0,
      labelRightMargin: 0,
      labelTopMargin: 0,
      labelBottomMargin: 0,
      minHeight: 20,
      maxAnnotationHeight: null,
      trackBorderWidth: 0,
      trackBorderColor: 'black',
      valueColumn: null,
      colorEncoding: 'itemRgb',
      showTexts: false,
      colorRange: ['#000000', '#652537', '#bf5458', '#fba273', '#ffffe0'],
      colorEncodingRange: false,
      separatePlusMinusStrands: true,
      annotationHeight: 16,
    },
  },
  {
    type: 'empty',
    datatype: [],
    orientation: '1d-horizontal',
    name: 'Empty track',
    thumbnail: null,
    availableOptions: [],
    defaultOptions: {},
  },
];

export default TRACKS_INFO;
