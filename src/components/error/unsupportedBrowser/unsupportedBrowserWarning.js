import React from 'react';
import getText from 'context/language/getText';
import Modal from 'components/common/modals/modal';

const UnsupportedBrowserWarning = () => (
  <Modal
    basic
    defaultOpen
    title={getText('unsupportedBrowser.title')}
    icon="warning circle"
  >
    <div>
      <p>{getText('unsupportedBrowser.uhOh')}</p>
      <p>{getText('unsupportedBrowser.strange')}</p>
      <p>{getText('unsupportedBrowser.update')}</p>
    </div>
  </Modal>
);

export default UnsupportedBrowserWarning;
