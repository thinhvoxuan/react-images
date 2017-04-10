"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (fill) {
	return "<svg fill=\"" + fill + "\" width=\"33\" height=\"33\" viewBox=\"0 0 33 33\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><title>8A2F0381-DEA2-44CB-91A6-8DAFAB3DECED</title>\n\t<defs>\n\t\t<filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"filter-a\">\n\t\t\t<feMorphology radius=\"1.5\" operator=\"dilate\" in=\"SourceAlpha\" result=\"shadowSpreadOuter1\"/>\n\t\t\t<feOffset dy=\"2\" in=\"shadowSpreadOuter1\" result=\"shadowOffsetOuter1\"/>\n\t\t\t<feGaussianBlur stdDeviation=\"2\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"/>\n\t\t\t<feComposite in=\"shadowBlurOuter1\" in2=\"SourceAlpha\" operator=\"out\" result=\"shadowBlurOuter1\"/>\n\t\t\t<feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0\" in=\"shadowBlurOuter1\"/>\n\t\t</filter>\n\t</defs><g fill=\"none\" fill-rule=\"evenodd\">\n\t<g transform=\"translate(5 3)\">\n\t\t<circle fill=\"#000\" cx=\"11.5\" cy=\"11.5\" r=\"11.5\" filter=\"url(#filter-a)\" />\n\t\t<circle stroke=\"#FFF\" stroke-width=\"3\" fill=\"#353535\"  cx=\"11.5\" cy=\"11.5\" r=\"11.5\"/>\n\t</g>\n\t\t<path d=\"M20.595 19.235l.64-.64-8.153-8.154-.64.64 8.153 8.154zm.64-8.153l-.64-.64-8.154 8.153.64.64 8.154-8.153z\" stroke=\"#FFF\" fill=\"#FFF\"/>\n\t</g>\n\t</svg>";
};

module.exports = exports["default"];