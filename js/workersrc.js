/**
 * Checks if the page is displayed in an iframe. If not redirect to /.
 **/
function redirectIfNotDisplayedInFrame () {
	try {
		if (window.frameElement || location.href.indexOf('?file=blob') !== false) {
			return;
		}
	} catch (e) {}

	window.location.href = '/';
}
redirectIfNotDisplayedInFrame();

function deferredViewerConfig() {
	try {
		PDFViewerApplicationOptions.set('workerSrc', document.getElementsByTagName('head')[0].getAttribute('data-workersrc'));
		PDFViewerApplicationOptions.set('locale', parent.OC.getLocale());
	} catch (e) {}
	pdfjsLib.externalLinkTarget = pdfjsLib.LinkTarget.BLANK;
	pdfjsLib.isEvalSupported = false;
}

// Wait until viewer is ready and patch it on the fly
document.addEventListener('webviewerloaded', deferredViewerConfig, true);
