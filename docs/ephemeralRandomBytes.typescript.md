# `ephemeralRandomBytes` Submodule <a name="`ephemeralRandomBytes` Submodule" id="@cdktn/provider-random.ephemeralRandomBytes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralRandomBytes <a name="EphemeralRandomBytes" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/bytes random_bytes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer"></a>

```typescript
import { ephemeralRandomBytes } from '@cdktn/provider-random'

new ephemeralRandomBytes.EphemeralRandomBytes(scope: Construct, id: string, config: EphemeralRandomBytesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig">EphemeralRandomBytesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig">EphemeralRandomBytesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isConstruct"></a>

```typescript
import { ephemeralRandomBytes } from '@cdktn/provider-random'

ephemeralRandomBytes.EphemeralRandomBytes.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformElement"></a>

```typescript
import { ephemeralRandomBytes } from '@cdktn/provider-random'

ephemeralRandomBytes.EphemeralRandomBytes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralRandomBytes } from '@cdktn/provider-random'

ephemeralRandomBytes.EphemeralRandomBytes.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.base64">base64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.hex">hex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.lengthInput">lengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.length">length</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `base64`<sup>Required</sup> <a name="base64" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.base64"></a>

```typescript
public readonly base64: string;
```

- *Type:* string

---

##### `hex`<sup>Required</sup> <a name="hex" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.hex"></a>

```typescript
public readonly hex: string;
```

- *Type:* string

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.lengthInput"></a>

```typescript
public readonly lengthInput: number;
```

- *Type:* number

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralRandomBytesConfig <a name="EphemeralRandomBytesConfig" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.Initializer"></a>

```typescript
import { ephemeralRandomBytes } from '@cdktn/provider-random'

const ephemeralRandomBytesConfig: ephemeralRandomBytes.EphemeralRandomBytesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.length">length</a></code> | <code>number</code> | The number of bytes requested. The minimum value for length is 1. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

The number of bytes requested. The minimum value for length is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/bytes#length EphemeralRandomBytes#length}

---



