### TCFDecisions

``` typescript
/** A user's consent decision on all TCF options */
interface TCFDecisions {
  /** A user's consent decision on TCF purposes */
  purposes?: TCFUserDecisionOnPurpose[];
  /** A user's consent decision on TCF special features */
  specialFeatures?: TCFUserDecisionOnSpecialFeature[];
  /** A user's consent decision on TCF vendors */
  vendors?: TCFUserDecisionOnVendor[];
}
```

### BaseTCFUserDecision
```typescript
interface BaseTCFUserDecision {
  /** Indicates if the user gave consent (true) or denied consent (false) */
  consent?: boolean;
  /** The id of the purpose/vendor the consent decision belongs to */
  id: number;
}
```

### TCFUserDecisionOnPurpose
```typescript
/** A user's consent decision for a single purpose */
interface TCFUserDecisionOnPurpose extends BaseTCFUserDecision {
  /** Indicates if the user gave legitimate interest consent (true) or denied consent (false) */
  legitimateInterestConsent?: boolean;
}
```

### TCFUserDecisionOnSpecialFeature
```typescript
/** A user's consent decision for a single special feature */
interface TCFUserDecisionOnSpecialFeature extends BaseTCFUserDecision {
  /** pasisng consent is compulsory */
  consent: boolean;
}
```