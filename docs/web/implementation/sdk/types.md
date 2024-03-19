### CmpEventSource
```typescript 
type CmpEventSource = UiView | 'embeddings' | '__ucCmp';
```

### ServicesConsents
```typescript
type ServicesConsents = ServiceConsent[];
```

### CategoriesConsents
```typescript
type CategoriesConsents = CategoryConsent[];
```

### CategoryConsent
```typescript
type CategoryConsent = ServiceConsent;
```

### Languages
```typescript
type Languages = Record<string, Language>;
```

### UiView
```typescript
type UiView = 'none' | 'button' | 'first' | 'second';
```