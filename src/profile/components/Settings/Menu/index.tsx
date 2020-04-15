import React from 'react';

import * as appUrls from 'core/appUrls';

import style from './menu.less';
import Tab from './Tab';

const Menu = () => (
  <div className={style.menu}>
    <Tab text="Informasjon" {...appUrls.getProfileSettingsUrl()} />
    <Tab text="E-Post" {...appUrls.getProfileSettingsMailUrl()} />
    <Tab text="Passord" {...appUrls.getProfileSettingsPasswordUrl()} />
    <Tab text="Prikker og suspensjoner" {...appUrls.getProfileSettingsPenaltiesUrl()} />
    <Tab text="Personvern" {...appUrls.getProfileSettingsPrivacyUrl()} />
    <Tab text="Adgangskort (NTNU)" {...appUrls.getProfileSettingsAccessCardUrl()} />
    <Tab text="Notifikasjoner" {...appUrls.getProfileSettingsNotificationsUrl()} />
  </div>
);

export default Menu;
