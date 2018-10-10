import AlignPlugin from './align';
import FontColorPlugin from './fontColor';
import FontBgColorPlugin from './fontBgColor';
import FontSizePlugin from './fontSize';

const plugins = [
  AlignPlugin(),
  FontColorPlugin({
    color: mark => mark.data.get("color") && mark.data.get("color").color
  }),
  FontBgColorPlugin({
    backgroundColor: mark =>
      mark.data.get("color") && mark.data.get("color").color
  }),
  FontSizePlugin()
];

export default plugins;
