### InitOptions

``` typescript
interface InitOptions {
  disableTracking?: boolean;
  euMode?: boolean;
  language?: string;
  location?: UserLocation;
  sandbox?: true;
}
```

### UserLocation

``` typescript
interface UserLocation {
  country: string;
  region?: string;
  city?: string;
}
```

### ServiceConsent
```typescript
interface ServiceConsent {
  id: string;
  consent: boolean;
}
```

### LanguagesData
```typescript
interface LanguagesData {
    languages: Languages;
}
```

### Language
```typescript
interface Language {
    name: string;
    en?: string;
    rtl?: true;
}
```