### Languages Model
```typescript
class LanguagesModel {
  languages: Languages;
  /**
   * Determines wether or not a language is available
   * @param {string} language - Language code.
   * @returns {boolean} - True if language is available.
   */
  getHasLanguage(language: string): boolean;
  /**
   * Get the language direction (ltr or rtl)
   * @param {string} language - Language code.
   * @returns {string} - The language direction.
   */
  getLanguageScreenDirection(language: string): "ltr" | "rtl";
}
```

### UIModel
```typescript
class UiModel {
    initialView: UiView;
    closedView: 'none' | 'button';
    language: string;
    gpcSignalHonored: boolean;
    dpsDisplayFormat: 'ALL' | 'SHORT';
    
    /**
     * Get the ui chosen language
     * @returns {string} - The ui language.
     */
    getLanguage(): string;
    /**
     * Set the ui language
     * @param {string} language - Chosen language.
     * @returns {void}
     */
    setLanguage(language: string): void;
    /**
     * Get the ui initial view
     * @returns {UiView | undefined} - The initial UI view.
     */
    getInitialView(): UiView | undefined;
    /**
     * Determine which view should be shown upon closing the CMP (none | button)
     * @returns {string} - The UI view to be shown after closing CMP.
     */
    getClosedView(): "none" | "button";
}
```

### DpsModel
```typescript
class DpsModel implements DpsData {
  services: DpsData['services'];
  categories: DpsData['categories'];
  granularConsentDisabled: DpsData['granularConsentDisabled'];
  updatedBy?: DpsData['updatedBy'];
  constructor({ services, categories, granularConsentDisabled }: DpsData);
  /**
   * Accept all services consents
   * @returns {void}
   */
  acceptAll(): void;
  /**
   * Deny all services consents
   * @returns {void}
   */
  denyAll(): void;
  /**
   * Accept a set of services consents
   * @param {ServicesConsents} consents - Set of services to be accepted.
   * @returns {void}
   */
  acceptSome(consents: ServicesConsents): void;
  /**
   * Deny a set of services consents
   * @param {ServicesConsents} consents - Set of services to be denied.
   * @returns {void}
   */
  denySome(consents: ServicesConsents): void;
  /**
   * Update a set of services consents
   * @param {ServicesConsents} consents - Set of services to be updated.
   * @returns {void}
   */
  updateSome(consents: ServicesConsents): void;
  /**
   * Update a set of categories' consents
   * @param {CategoriesConsents} categoriesConsents - Set of categories to be updated.
   * @returns {void}
   */
  updateCategoriesConsents(categoriesConsents: CategoriesConsents): void;
  /**
   * Get all accepted services
   * @param {string} key - Key that will identify each service on the final result.
   * @returns {Record<string, ServiceData>} - The set of accepted services.
   */
  getAcceptedServices(key?: 'id' | 'name'): Record<string, import("@usercentrics/cmp-browser-api").ServiceData>;
  /**
   * Get all services consent state
   * @param {string} key - Key that will identify each service on the final result.
   * @returns {Record<string, boolean>} - The set of services with the respective consent state.
   */
  getServicesConsents(key?: 'id' | 'name'): Record<string, boolean>;
  /**
   * Get all categories consent state
   * @returns {Record<string, CategoryData['state']>} - The set of categories with the respective consent state.
   */
  getCategoriesConsents(): Record<string, "ALL_DENIED" | "SOME_ACCEPTED" | "ALL_ACCEPTED">;
  /**
   * Get category consent state
   * @param {string} id - Category Id.
   * @returns {CategoryData['state']} - The consent state of the category.
   */
  getCategoryConsent(id: string): "ALL_DENIED" | "SOME_ACCEPTED" | "ALL_ACCEPTED" | undefined;
  /**
   * Get category id from service id
   * @param {string} serviceId - Service Id.
   * @returns {string} - The category Id.
   */
  getCategoryIdFromServiceId(serviceId: string): string;
  /**
   * Get global consent status (based on all services)
   * @returns {ConsentData['status']} - The global consent status.
   */
  getConsentStatus(): ConsentData['status'];
  /**
   * Get the list of services ids which belong to the some_accepted or some_denied cases
   * @returns {string[]} - The list of services ids.
   */
  getConsentServiceIds(): string[];
  /**
   * Get service data by id
   * @param {string} serviceId - Service id.
   * @returns {ServiceData | undefined} - The service data.
   */
  getService(serviceId: string): import("@usercentrics/cmp-browser-api").ServiceData | undefined;
}
```

### CmpController

```typescript
export class CmpController {
  public languages: LanguagesModel;
  public ui: UiModel;

  public dps: DpsModel;
  public gcm?: GoogleConsentModeModel;
  public setting: SettingModel;

  public consent?: GdprConsentModel | CcpaConsentModel | TcfConsentModel;
  public i18n?: GdprI18nModel | CcpaI18nModel | TcfI18nModel;
  public tcf?: TcfModel;
  public template?: TemplateModel;
  public theme: ThemeModel;

  /**
   * Get the consent details
   * @returns {Promise<ConsentDetails | undefined>} - The consent data used inside our UCstring.
   */
  getConsentDetails(): Promise<ConsentDetails | undefined>;
  /**
   * Fetch the translated data from the API and created the respective variant i18n models
   * @returns {Promise<void>}
   */
  initI18nData(): Promise<void>;
  /**
   * Clears the Local Storage including Cross Domain
   * @returns {Promise<void>}
   */
  clearStorage(): Promise<void>;
  /**
   * Unblock the scripts which need consent to be run
   * @returns {Promise<string[]>} - A list with the services names which were unblocked.
   */
  unblockScriptsWithConsent(): Promise<string[]>;
  /**
   * Get the Controller Id
   * @returns {string | undefined} - The controller id value.
   */
  getControllerId(): string | undefined;
  /**
   * Get the current selected language
   * @returns {string} the selected language
   */
  getLanguage(): string;
  /**
   * Get consent required
   * @returns {boolean | undefined} - True if consent is required from user.
   */
  getIsConsentRequired(): boolean | undefined;
  /**
   * Sets the CMP language to the new given language
   * @param {string} language - New language
   * @returns {Promise<void>}
   */
  changeLanguage(language: string): Promise<void>;
  /**
   * Will set the analytics pixel via network call and will fire the custom events defined on the AI
   * @param {CMP_EVENT_TYPE} cmpEventType - The type of event which trigered the analytics call.
   * @param {CmpEventSource} source - The source from where the event was fired originally.
   * @returns {void}
   */
  setAnalyticsPixel(cmpEventType: CMP_EVENT_TYPE, source?: CmpEventSource): void;
  /**
   * Accepts all consents inside the CMP
   * @returns {Promise<void>}
   */
  acceptAllConsents(): Promise<void>;
  /**
   * Denys all consents inside the CMP
   * @returns {Promise<void>}
   */
  denyAllConsents(): Promise<void>;
  /**
   * Updates a list of consents with the respective state
   * @param {ServicesConsents} consents - List of (serviceId, consentState) pair.
   * @returns {Promise<void>}
   */
  updateServicesConsents(consents: ServicesConsents): Promise<void>;
  /**
   * Updates a specific consent with the respective state
   * @param {ServiceConsent} consent - The service to be updated (serviceId, consentState) pair.
   * @returns {Promise<void>}
   */
  updateServiceConsent(consent: ServiceConsent): Promise<void>;
  /**
   * Updates a list of categories with the respective state
   * @param {CategoriesConsents} categoriesConsents - List of (categoryId, consentState) pair.
   * @returns {Promise<void>}
   */
  updateCategoriesConsents(categoriesConsents: CategoriesConsents): Promise<void>;
  /**
   * Updates a specific category with the respective state
   * @param {CategoriesConsents} categoriesConsents - The category to be updated (categoryId, consentState) pair.
   * @returns {Promise<void>}
   */
  updateCategoryConsent(categoryConsent: CategoryConsent): Promise<void>;
  /**
   * Save the consents
   * @param {ConsentType} consentType - Type of consent (Implicit/Explicit).
   * @returns {Promise<void>}
   */
  saveConsents(consentType?: ConsentType, fromEmbeddings?: boolean): Promise<void>;
  /**
   * Save the consents remotely on API
   * @returns {Promise<void>}
   */
  saveConsentRemotely(): Promise<void>;
  /**
   * Check if all consents are granted
   * @returns {boolean} - True if all consents accepted.
   */
  areAllConsentsAccepted(): boolean;
  /**
   * Check if all consents are denied
   * @returns {boolean} - True if all consents denied.
   */
  areAllConsentsDenied(): boolean;
  /**
   * Gets the detailed information of a service
   * @param {string} serviceId - Service id.
   * @param {boolean} includeDetails - Determine wether service details should be included on the result or not.
   * @returns {Promise<{service: ServiceData; i18n: ServiceI18n;} | undefined>} - The service detailed information.
   */
  getServiceInfo(serviceId: string, includeDetails?: boolean): Promise<{
      service: import("@usercentrics/cmp-browser-api").ServiceData;
      i18n: import("@usercentrics/cmp-browser-api").ServiceI18n;
  } | undefined>;
  /**
   * Get Stored Information via URL
   * @param {string} url - URL for Stored Info.
   * @returns {Promise<{disclosures?: StoredInfoItem[] | undefined; domains?: StoredInfoItem[] | undefined;}>} - The service's stored information.
   */
  getStoredInfoByUrl(url: string): Promise<{
      disclosures?: StoredInfoItem[] | undefined;
      domains?: StoredInfoItem[] | undefined;
  }>;
  /**
   * Save consents locally and remotely
   * @param {string} consentHash - Consent hash string.
   * @returns {Promise<void>}
   */
  applyConsents(consentHash?: string): Promise<void>;
  /**
   * Get themes
   * @param {Themes} themes - Themes for privacy button, cmp and embeddings views.
   * @param {ScreenType} screenType - Screen type (desktop, tablet, mobile, xs).
   * @returns {privacyButton, firstLayer, secondLayer, embeddings} - The views' themes according to screen type.
   */
  getThemes(themes: Themes, screenType: _ScreenType1): {
      privacyButton: Required<Required<import("@usercentrics/cmp-browser-api").PrivacyButtonTheme>> | {
          direction: import("@/models/ThemeModel/interfaces").ScreenDirection | undefined;
          position: "left" | "right";
          size: number;
          backgroundColor: string;
          pages: string[];
          iconUrl: string;
          iconColor: string;
      };
      firstLayer: Required<import("@usercentrics/cmp-browser-api").CmpTheme>;
      secondLayer: Required<import("@usercentrics/cmp-browser-api").CmpTheme>;
      embeddings: {
          direction: import("@/models/ThemeModel/interfaces").ScreenDirection | undefined;
          border: {
              radius: string;
          };
          borderRadiusLayer: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
          borderRadiusButton: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
          buttons: import("@usercentrics/cmp-browser-api").CmpButtonsType[][];
          colors: {
              acceptBg?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              acceptTxt?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              background?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              border?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              denyBg?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              denyTxt?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              /**
               * Update theme model
               * @param {ThemeData} themeData - Theme model data.
               * @returns {void}
               */
              link?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              moreBg?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              moreTxt?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              neutral?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              overlay?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              primary?: import("@usercentrics/cmp-browser-api").OptionalSettingsData; /**
                * Get service consent history
                * @param {string} serviceId - Service id.
                * @returns {Promise<void | DeviceStorage | null>} - The consent history for the service.
                */
              privacyBg?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              privacyIcon?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              saveBg?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              saveTxt?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              tabActive?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              tabInactive?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              toggleActive?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              toggleInactive?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              toggleDisabled?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              toggleActiveIcon?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              toggleInactiveIcon?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              toggleDisabledIcon?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              tertiary?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              text?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              ccpaButtonColor?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              ccpaButtonTextColor?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
          };
          scrollbar: {
              thumbColor?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
          };
          fonts: {
              family: string;
          };
          hideDenyBtn: boolean;
          hideLanguageSwitch: boolean;
          logo: {
              url: string;
              alt: string;
              position: "center" | "left" | "right";
          };
          footer: {
              isCentered: boolean;
          };
          maxBannerWidth: string;
          name: string;
          overlayOpacity: string;
          position: "center" | "left" | "right" | "bottom";
          removeCcpaToggle: boolean;
          secondLayerTrigger: string;
          spacing: import("@usercentrics/cmp-browser-api").Spacing;
          typography: {
              color?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              font?: import("@usercentrics/cmp-browser-api").OptionalSettingsData;
              size?: number | undefined;
          };
          useBackgroundShadow: boolean;
          useOverlay: boolean;
          closeOption: import("@usercentrics/cmp-browser-api").CLOSE_OPTION | null;
          tcf: {
              showDescriptions?: boolean | undefined;
              hideNonIab?: boolean | undefined;
              hideToggles?: boolean | undefined;
              showSharedOutsideEu?: boolean | undefined;
          };
          showCategoriesToggles: boolean;
          showMoreInformationLink: boolean;
          hideDataProcessingServices: boolean;
          hideServicesToggles: boolean;
          defaultTab: "FIRST" | "SECOND";
      };
  };
  /**
   * Update theme model
   * @param {ThemeData} themeData - Theme model data.
   * @returns {void}
   */
  updateTheme(themeData: _ThemeData1): void;
  /**
   * Get service consent history
   * @param {string} serviceId - Service id.
   * @returns {Promise<void | DeviceStorage | null>} - The consent history for the service.
   */
  getConsentHistory(serviceId?: string): Promise<void | import("@usercentrics/cmp-browser-api").ConsentHistory[] | null>;
}
```