import _ from 'lodash';
import domready from 'domready';
import { iframeResizer } from 'iframe-resizer';

const loadWidgets = () => {
  const iframeStyles = 'border: none; height: 100%; width: 100%';
  const widgetDOMs = document.getElementsByClassName('Wavingly-widget');

  // const scriptSrcs = _.map(document.getElementsByTagName('script'), scriptTag => scriptTag.src);
  // const wavinglySrc = _.find(scriptSrcs, src => _.includes(src, 'wavinglyjs'));
  // const spaceId = _.last(wavinglySrc.split('#space_id='));

  _.each(widgetDOMs, widgetDOM => {
    const widgetId = widgetDOM.dataset.widgetId;
    const widgetIframe = document.createElement('iframe');
    const IframeID = `Wavingly-widget_${widgetId}`;

    widgetIframe.id = IframeID;
    widgetIframe.src = `https://www.wavingly.com/widgets/${widgetId}`;
    widgetIframe.style.cssText = iframeStyles;

    widgetDOM.appendChild(widgetIframe);

    iframeResizer({log: false, checkOrigin: false}, `#${IframeID}`);
  });
};

domready(loadWidgets);
