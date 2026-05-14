# `password` Submodule <a name="`password` Submodule" id="@cdktn/provider-random.password"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Password <a name="Password" id="@cdktn/provider-random.password.Password"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/password random_password}.

#### Initializers <a name="Initializers" id="@cdktn/provider-random.password.Password.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Random;

new Password(Construct Scope, string Id, PasswordConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.password.Password.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-random.password.Password.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-random.password.Password.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-random.password.PasswordConfig">PasswordConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-random.password.Password.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-random.password.Password.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-random.password.Password.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-random.password.PasswordConfig">PasswordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-random.password.Password.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-random.password.Password.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-random.password.Password.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-random.password.Password.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-random.password.Password.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-random.password.Password.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-random.password.Password.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-random.password.Password.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-random.password.Password.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-random.password.Password.resetKeepers">ResetKeepers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.resetLower">ResetLower</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.resetMinLower">ResetMinLower</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.resetMinNumeric">ResetMinNumeric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.resetMinSpecial">ResetMinSpecial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.resetMinUpper">ResetMinUpper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.resetNumber">ResetNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.resetNumeric">ResetNumeric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.resetOverrideSpecial">ResetOverrideSpecial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.resetSpecial">ResetSpecial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.resetUpper">ResetUpper</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-random.password.Password.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-random.password.Password.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-random.password.Password.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-random.password.Password.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-random.password.Password.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-random.password.Password.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-random.password.Password.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-random.password.Password.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-random.password.Password.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-random.password.Password.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-random.password.Password.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-random.password.Password.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-random.password.Password.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-random.password.Password.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-random.password.Password.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-random.password.Password.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-random.password.Password.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-random.password.Password.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-random.password.Password.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-random.password.Password.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-random.password.Password.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-random.password.Password.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-random.password.Password.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-random.password.Password.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-random.password.Password.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-random.password.Password.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-random.password.Password.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-random.password.Password.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-random.password.Password.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-random.password.Password.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-random.password.Password.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-random.password.Password.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-random.password.Password.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-random.password.Password.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-random.password.Password.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-random.password.Password.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-random.password.Password.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-random.password.Password.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-random.password.Password.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-random.password.Password.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-random.password.Password.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-random.password.Password.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-random.password.Password.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-random.password.Password.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-random.password.Password.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetKeepers` <a name="ResetKeepers" id="@cdktn/provider-random.password.Password.resetKeepers"></a>

```csharp
private void ResetKeepers()
```

##### `ResetLower` <a name="ResetLower" id="@cdktn/provider-random.password.Password.resetLower"></a>

```csharp
private void ResetLower()
```

##### `ResetMinLower` <a name="ResetMinLower" id="@cdktn/provider-random.password.Password.resetMinLower"></a>

```csharp
private void ResetMinLower()
```

##### `ResetMinNumeric` <a name="ResetMinNumeric" id="@cdktn/provider-random.password.Password.resetMinNumeric"></a>

```csharp
private void ResetMinNumeric()
```

##### `ResetMinSpecial` <a name="ResetMinSpecial" id="@cdktn/provider-random.password.Password.resetMinSpecial"></a>

```csharp
private void ResetMinSpecial()
```

##### `ResetMinUpper` <a name="ResetMinUpper" id="@cdktn/provider-random.password.Password.resetMinUpper"></a>

```csharp
private void ResetMinUpper()
```

##### `ResetNumber` <a name="ResetNumber" id="@cdktn/provider-random.password.Password.resetNumber"></a>

```csharp
private void ResetNumber()
```

##### `ResetNumeric` <a name="ResetNumeric" id="@cdktn/provider-random.password.Password.resetNumeric"></a>

```csharp
private void ResetNumeric()
```

##### `ResetOverrideSpecial` <a name="ResetOverrideSpecial" id="@cdktn/provider-random.password.Password.resetOverrideSpecial"></a>

```csharp
private void ResetOverrideSpecial()
```

##### `ResetSpecial` <a name="ResetSpecial" id="@cdktn/provider-random.password.Password.resetSpecial"></a>

```csharp
private void ResetSpecial()
```

##### `ResetUpper` <a name="ResetUpper" id="@cdktn/provider-random.password.Password.resetUpper"></a>

```csharp
private void ResetUpper()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-random.password.Password.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-random.password.Password.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Password resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-random.password.Password.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Random;

Password.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-random.password.Password.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-random.password.Password.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Random;

Password.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-random.password.Password.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-random.password.Password.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Random;

Password.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-random.password.Password.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-random.password.Password.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Random;

Password.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Password resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-random.password.Password.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-random.password.Password.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Password to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-random.password.Password.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Password that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/password#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-random.password.Password.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Password to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.password.Password.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-random.password.Password.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.bcryptHash">BcryptHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.result">Result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.keepersInput">KeepersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.lengthInput">LengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.lowerInput">LowerInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.minLowerInput">MinLowerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.minNumericInput">MinNumericInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.minSpecialInput">MinSpecialInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.minUpperInput">MinUpperInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.numberInput">NumberInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.numericInput">NumericInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.overrideSpecialInput">OverrideSpecialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.specialInput">SpecialInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.upperInput">UpperInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.keepers">Keepers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.length">Length</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.lower">Lower</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.minLower">MinLower</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.minNumeric">MinNumeric</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.minSpecial">MinSpecial</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.minUpper">MinUpper</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.number">Number</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.numeric">Numeric</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.overrideSpecial">OverrideSpecial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.special">Special</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.Password.property.upper">Upper</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-random.password.Password.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-random.password.Password.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-random.password.Password.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-random.password.Password.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-random.password.Password.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-random.password.Password.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-random.password.Password.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-random.password.Password.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-random.password.Password.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-random.password.Password.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-random.password.Password.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-random.password.Password.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-random.password.Password.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-random.password.Password.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BcryptHash`<sup>Required</sup> <a name="BcryptHash" id="@cdktn/provider-random.password.Password.property.bcryptHash"></a>

```csharp
public string BcryptHash { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-random.password.Password.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-random.password.Password.property.result"></a>

```csharp
public string Result { get; }
```

- *Type:* string

---

##### `KeepersInput`<sup>Optional</sup> <a name="KeepersInput" id="@cdktn/provider-random.password.Password.property.keepersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KeepersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="@cdktn/provider-random.password.Password.property.lengthInput"></a>

```csharp
public double LengthInput { get; }
```

- *Type:* double

---

##### `LowerInput`<sup>Optional</sup> <a name="LowerInput" id="@cdktn/provider-random.password.Password.property.lowerInput"></a>

```csharp
public bool|IResolvable LowerInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MinLowerInput`<sup>Optional</sup> <a name="MinLowerInput" id="@cdktn/provider-random.password.Password.property.minLowerInput"></a>

```csharp
public double MinLowerInput { get; }
```

- *Type:* double

---

##### `MinNumericInput`<sup>Optional</sup> <a name="MinNumericInput" id="@cdktn/provider-random.password.Password.property.minNumericInput"></a>

```csharp
public double MinNumericInput { get; }
```

- *Type:* double

---

##### `MinSpecialInput`<sup>Optional</sup> <a name="MinSpecialInput" id="@cdktn/provider-random.password.Password.property.minSpecialInput"></a>

```csharp
public double MinSpecialInput { get; }
```

- *Type:* double

---

##### `MinUpperInput`<sup>Optional</sup> <a name="MinUpperInput" id="@cdktn/provider-random.password.Password.property.minUpperInput"></a>

```csharp
public double MinUpperInput { get; }
```

- *Type:* double

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktn/provider-random.password.Password.property.numberInput"></a>

```csharp
public bool|IResolvable NumberInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumericInput`<sup>Optional</sup> <a name="NumericInput" id="@cdktn/provider-random.password.Password.property.numericInput"></a>

```csharp
public bool|IResolvable NumericInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OverrideSpecialInput`<sup>Optional</sup> <a name="OverrideSpecialInput" id="@cdktn/provider-random.password.Password.property.overrideSpecialInput"></a>

```csharp
public string OverrideSpecialInput { get; }
```

- *Type:* string

---

##### `SpecialInput`<sup>Optional</sup> <a name="SpecialInput" id="@cdktn/provider-random.password.Password.property.specialInput"></a>

```csharp
public bool|IResolvable SpecialInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UpperInput`<sup>Optional</sup> <a name="UpperInput" id="@cdktn/provider-random.password.Password.property.upperInput"></a>

```csharp
public bool|IResolvable UpperInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Keepers`<sup>Required</sup> <a name="Keepers" id="@cdktn/provider-random.password.Password.property.keepers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Keepers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktn/provider-random.password.Password.property.length"></a>

```csharp
public double Length { get; }
```

- *Type:* double

---

##### `Lower`<sup>Required</sup> <a name="Lower" id="@cdktn/provider-random.password.Password.property.lower"></a>

```csharp
public bool|IResolvable Lower { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MinLower`<sup>Required</sup> <a name="MinLower" id="@cdktn/provider-random.password.Password.property.minLower"></a>

```csharp
public double MinLower { get; }
```

- *Type:* double

---

##### `MinNumeric`<sup>Required</sup> <a name="MinNumeric" id="@cdktn/provider-random.password.Password.property.minNumeric"></a>

```csharp
public double MinNumeric { get; }
```

- *Type:* double

---

##### `MinSpecial`<sup>Required</sup> <a name="MinSpecial" id="@cdktn/provider-random.password.Password.property.minSpecial"></a>

```csharp
public double MinSpecial { get; }
```

- *Type:* double

---

##### `MinUpper`<sup>Required</sup> <a name="MinUpper" id="@cdktn/provider-random.password.Password.property.minUpper"></a>

```csharp
public double MinUpper { get; }
```

- *Type:* double

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-random.password.Password.property.number"></a>

```csharp
public bool|IResolvable Number { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Numeric`<sup>Required</sup> <a name="Numeric" id="@cdktn/provider-random.password.Password.property.numeric"></a>

```csharp
public bool|IResolvable Numeric { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OverrideSpecial`<sup>Required</sup> <a name="OverrideSpecial" id="@cdktn/provider-random.password.Password.property.overrideSpecial"></a>

```csharp
public string OverrideSpecial { get; }
```

- *Type:* string

---

##### `Special`<sup>Required</sup> <a name="Special" id="@cdktn/provider-random.password.Password.property.special"></a>

```csharp
public bool|IResolvable Special { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Upper`<sup>Required</sup> <a name="Upper" id="@cdktn/provider-random.password.Password.property.upper"></a>

```csharp
public bool|IResolvable Upper { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.password.Password.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-random.password.Password.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordConfig <a name="PasswordConfig" id="@cdktn/provider-random.password.PasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-random.password.PasswordConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Random;

new PasswordConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double Length,
    System.Collections.Generic.IDictionary<string, string> Keepers = null,
    bool|IResolvable Lower = null,
    double MinLower = null,
    double MinNumeric = null,
    double MinSpecial = null,
    double MinUpper = null,
    bool|IResolvable Number = null,
    bool|IResolvable Numeric = null,
    string OverrideSpecial = null,
    bool|IResolvable Special = null,
    bool|IResolvable Upper = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.length">Length</a></code> | <code>double</code> | The length of the string desired. |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.keepers">Keepers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.lower">Lower</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.minLower">MinLower</a></code> | <code>double</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.minNumeric">MinNumeric</a></code> | <code>double</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.minSpecial">MinSpecial</a></code> | <code>double</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.minUpper">MinUpper</a></code> | <code>double</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.number">Number</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.numeric">Numeric</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.overrideSpecial">OverrideSpecial</a></code> | <code>string</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.special">Special</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktn/provider-random.password.PasswordConfig.property.upper">Upper</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-random.password.PasswordConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-random.password.PasswordConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-random.password.PasswordConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-random.password.PasswordConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-random.password.PasswordConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-random.password.PasswordConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-random.password.PasswordConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktn/provider-random.password.PasswordConfig.property.length"></a>

```csharp
public double Length { get; set; }
```

- *Type:* double

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/password#length Password#length}

---

##### `Keepers`<sup>Optional</sup> <a name="Keepers" id="@cdktn/provider-random.password.PasswordConfig.property.keepers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Keepers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/password#keepers Password#keepers}

---

##### `Lower`<sup>Optional</sup> <a name="Lower" id="@cdktn/provider-random.password.PasswordConfig.property.lower"></a>

```csharp
public bool|IResolvable Lower { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/password#lower Password#lower}

---

##### `MinLower`<sup>Optional</sup> <a name="MinLower" id="@cdktn/provider-random.password.PasswordConfig.property.minLower"></a>

```csharp
public double MinLower { get; set; }
```

- *Type:* double

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/password#min_lower Password#min_lower}

---

##### `MinNumeric`<sup>Optional</sup> <a name="MinNumeric" id="@cdktn/provider-random.password.PasswordConfig.property.minNumeric"></a>

```csharp
public double MinNumeric { get; set; }
```

- *Type:* double

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/password#min_numeric Password#min_numeric}

---

##### `MinSpecial`<sup>Optional</sup> <a name="MinSpecial" id="@cdktn/provider-random.password.PasswordConfig.property.minSpecial"></a>

```csharp
public double MinSpecial { get; set; }
```

- *Type:* double

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/password#min_special Password#min_special}

---

##### `MinUpper`<sup>Optional</sup> <a name="MinUpper" id="@cdktn/provider-random.password.PasswordConfig.property.minUpper"></a>

```csharp
public double MinUpper { get; set; }
```

- *Type:* double

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/password#min_upper Password#min_upper}

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@cdktn/provider-random.password.PasswordConfig.property.number"></a>

```csharp
public bool|IResolvable Number { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Include numeric characters in the result.

Default value is `true`. If `number`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/password#number Password#number}

---

##### `Numeric`<sup>Optional</sup> <a name="Numeric" id="@cdktn/provider-random.password.PasswordConfig.property.numeric"></a>

```csharp
public bool|IResolvable Numeric { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Include numeric characters in the result.

Default value is `true`. If `numeric`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/password#numeric Password#numeric}

---

##### `OverrideSpecial`<sup>Optional</sup> <a name="OverrideSpecial" id="@cdktn/provider-random.password.PasswordConfig.property.overrideSpecial"></a>

```csharp
public string OverrideSpecial { get; set; }
```

- *Type:* string

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/password#override_special Password#override_special}

---

##### `Special`<sup>Optional</sup> <a name="Special" id="@cdktn/provider-random.password.PasswordConfig.property.special"></a>

```csharp
public bool|IResolvable Special { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/password#special Password#special}

---

##### `Upper`<sup>Optional</sup> <a name="Upper" id="@cdktn/provider-random.password.PasswordConfig.property.upper"></a>

```csharp
public bool|IResolvable Upper { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/password#upper Password#upper}

---



