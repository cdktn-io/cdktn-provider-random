# `stringResource` Submodule <a name="`stringResource` Submodule" id="@cdktn/provider-random.stringResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StringResource <a name="StringResource" id="@cdktn/provider-random.stringResource.StringResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string random_string}.

#### Initializers <a name="Initializers" id="@cdktn/provider-random.stringResource.StringResource.Initializer"></a>

```java
import io.cdktn.providers.random_provider.string_resource.StringResource;

StringResource.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .length(java.lang.Number)
//  .keepers(java.util.Map<java.lang.String, java.lang.String>)
//  .lower(java.lang.Boolean|IResolvable)
//  .minLower(java.lang.Number)
//  .minNumeric(java.lang.Number)
//  .minSpecial(java.lang.Number)
//  .minUpper(java.lang.Number)
//  .number(java.lang.Boolean|IResolvable)
//  .numeric(java.lang.Boolean|IResolvable)
//  .overrideSpecial(java.lang.String)
//  .special(java.lang.Boolean|IResolvable)
//  .upper(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.length">length</a></code> | <code>java.lang.Number</code> | The length of the string desired. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.keepers">keepers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.lower">lower</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.minLower">minLower</a></code> | <code>java.lang.Number</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.minNumeric">minNumeric</a></code> | <code>java.lang.Number</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.minSpecial">minSpecial</a></code> | <code>java.lang.Number</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.minUpper">minUpper</a></code> | <code>java.lang.Number</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.number">number</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.numeric">numeric</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.overrideSpecial">overrideSpecial</a></code> | <code>java.lang.String</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.special">special</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.upper">upper</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.length"></a>

- *Type:* java.lang.Number

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#length StringResource#length}

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.keepers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#keepers StringResource#keepers}

---

##### `lower`<sup>Optional</sup> <a name="lower" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.lower"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#lower StringResource#lower}

---

##### `minLower`<sup>Optional</sup> <a name="minLower" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.minLower"></a>

- *Type:* java.lang.Number

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#min_lower StringResource#min_lower}

---

##### `minNumeric`<sup>Optional</sup> <a name="minNumeric" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.minNumeric"></a>

- *Type:* java.lang.Number

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#min_numeric StringResource#min_numeric}

---

##### `minSpecial`<sup>Optional</sup> <a name="minSpecial" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.minSpecial"></a>

- *Type:* java.lang.Number

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#min_special StringResource#min_special}

---

##### `minUpper`<sup>Optional</sup> <a name="minUpper" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.minUpper"></a>

- *Type:* java.lang.Number

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#min_upper StringResource#min_upper}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.number"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include numeric characters in the result.

Default value is `true`. If `number`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#number StringResource#number}

---

##### `numeric`<sup>Optional</sup> <a name="numeric" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.numeric"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include numeric characters in the result.

Default value is `true`. If `numeric`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#numeric StringResource#numeric}

---

##### `overrideSpecial`<sup>Optional</sup> <a name="overrideSpecial" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.overrideSpecial"></a>

- *Type:* java.lang.String

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#override_special StringResource#override_special}

---

##### `special`<sup>Optional</sup> <a name="special" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.special"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#special StringResource#special}

---

##### `upper`<sup>Optional</sup> <a name="upper" id="@cdktn/provider-random.stringResource.StringResource.Initializer.parameter.upper"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#upper StringResource#upper}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.resetKeepers">resetKeepers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.resetLower">resetLower</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.resetMinLower">resetMinLower</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.resetMinNumeric">resetMinNumeric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.resetMinSpecial">resetMinSpecial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.resetMinUpper">resetMinUpper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.resetNumber">resetNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.resetNumeric">resetNumeric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.resetOverrideSpecial">resetOverrideSpecial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.resetSpecial">resetSpecial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.resetUpper">resetUpper</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-random.stringResource.StringResource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-random.stringResource.StringResource.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-random.stringResource.StringResource.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-random.stringResource.StringResource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-random.stringResource.StringResource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-random.stringResource.StringResource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-random.stringResource.StringResource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-random.stringResource.StringResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-random.stringResource.StringResource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-random.stringResource.StringResource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-random.stringResource.StringResource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-random.stringResource.StringResource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-random.stringResource.StringResource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-random.stringResource.StringResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-random.stringResource.StringResource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.stringResource.StringResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-random.stringResource.StringResource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.stringResource.StringResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-random.stringResource.StringResource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.stringResource.StringResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-random.stringResource.StringResource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.stringResource.StringResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-random.stringResource.StringResource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.stringResource.StringResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-random.stringResource.StringResource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.stringResource.StringResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-random.stringResource.StringResource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.stringResource.StringResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-random.stringResource.StringResource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.stringResource.StringResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-random.stringResource.StringResource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.stringResource.StringResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-random.stringResource.StringResource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-random.stringResource.StringResource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-random.stringResource.StringResource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-random.stringResource.StringResource.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-random.stringResource.StringResource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.stringResource.StringResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-random.stringResource.StringResource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-random.stringResource.StringResource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-random.stringResource.StringResource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-random.stringResource.StringResource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-random.stringResource.StringResource.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-random.stringResource.StringResource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-random.stringResource.StringResource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetKeepers` <a name="resetKeepers" id="@cdktn/provider-random.stringResource.StringResource.resetKeepers"></a>

```java
public void resetKeepers()
```

##### `resetLower` <a name="resetLower" id="@cdktn/provider-random.stringResource.StringResource.resetLower"></a>

```java
public void resetLower()
```

##### `resetMinLower` <a name="resetMinLower" id="@cdktn/provider-random.stringResource.StringResource.resetMinLower"></a>

```java
public void resetMinLower()
```

##### `resetMinNumeric` <a name="resetMinNumeric" id="@cdktn/provider-random.stringResource.StringResource.resetMinNumeric"></a>

```java
public void resetMinNumeric()
```

##### `resetMinSpecial` <a name="resetMinSpecial" id="@cdktn/provider-random.stringResource.StringResource.resetMinSpecial"></a>

```java
public void resetMinSpecial()
```

##### `resetMinUpper` <a name="resetMinUpper" id="@cdktn/provider-random.stringResource.StringResource.resetMinUpper"></a>

```java
public void resetMinUpper()
```

##### `resetNumber` <a name="resetNumber" id="@cdktn/provider-random.stringResource.StringResource.resetNumber"></a>

```java
public void resetNumber()
```

##### `resetNumeric` <a name="resetNumeric" id="@cdktn/provider-random.stringResource.StringResource.resetNumeric"></a>

```java
public void resetNumeric()
```

##### `resetOverrideSpecial` <a name="resetOverrideSpecial" id="@cdktn/provider-random.stringResource.StringResource.resetOverrideSpecial"></a>

```java
public void resetOverrideSpecial()
```

##### `resetSpecial` <a name="resetSpecial" id="@cdktn/provider-random.stringResource.StringResource.resetSpecial"></a>

```java
public void resetSpecial()
```

##### `resetUpper` <a name="resetUpper" id="@cdktn/provider-random.stringResource.StringResource.resetUpper"></a>

```java
public void resetUpper()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StringResource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-random.stringResource.StringResource.isConstruct"></a>

```java
import io.cdktn.providers.random_provider.string_resource.StringResource;

StringResource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-random.stringResource.StringResource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-random.stringResource.StringResource.isTerraformElement"></a>

```java
import io.cdktn.providers.random_provider.string_resource.StringResource;

StringResource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-random.stringResource.StringResource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-random.stringResource.StringResource.isTerraformResource"></a>

```java
import io.cdktn.providers.random_provider.string_resource.StringResource;

StringResource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-random.stringResource.StringResource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-random.stringResource.StringResource.generateConfigForImport"></a>

```java
import io.cdktn.providers.random_provider.string_resource.StringResource;

StringResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StringResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StringResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-random.stringResource.StringResource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-random.stringResource.StringResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StringResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-random.stringResource.StringResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StringResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-random.stringResource.StringResource.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StringResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.result">result</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.keepersInput">keepersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.lengthInput">lengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.lowerInput">lowerInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.minLowerInput">minLowerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.minNumericInput">minNumericInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.minSpecialInput">minSpecialInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.minUpperInput">minUpperInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.numberInput">numberInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.numericInput">numericInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.overrideSpecialInput">overrideSpecialInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.specialInput">specialInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.upperInput">upperInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.keepers">keepers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.length">length</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.lower">lower</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.minLower">minLower</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.minNumeric">minNumeric</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.minSpecial">minSpecial</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.minUpper">minUpper</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.number">number</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.numeric">numeric</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.overrideSpecial">overrideSpecial</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.special">special</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.upper">upper</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-random.stringResource.StringResource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-random.stringResource.StringResource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-random.stringResource.StringResource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-random.stringResource.StringResource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-random.stringResource.StringResource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-random.stringResource.StringResource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-random.stringResource.StringResource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-random.stringResource.StringResource.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-random.stringResource.StringResource.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-random.stringResource.StringResource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-random.stringResource.StringResource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-random.stringResource.StringResource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-random.stringResource.StringResource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-random.stringResource.StringResource.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-random.stringResource.StringResource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-random.stringResource.StringResource.property.result"></a>

```java
public java.lang.String getResult();
```

- *Type:* java.lang.String

---

##### `keepersInput`<sup>Optional</sup> <a name="keepersInput" id="@cdktn/provider-random.stringResource.StringResource.property.keepersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKeepersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="@cdktn/provider-random.stringResource.StringResource.property.lengthInput"></a>

```java
public java.lang.Number getLengthInput();
```

- *Type:* java.lang.Number

---

##### `lowerInput`<sup>Optional</sup> <a name="lowerInput" id="@cdktn/provider-random.stringResource.StringResource.property.lowerInput"></a>

```java
public java.lang.Boolean|IResolvable getLowerInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `minLowerInput`<sup>Optional</sup> <a name="minLowerInput" id="@cdktn/provider-random.stringResource.StringResource.property.minLowerInput"></a>

```java
public java.lang.Number getMinLowerInput();
```

- *Type:* java.lang.Number

---

##### `minNumericInput`<sup>Optional</sup> <a name="minNumericInput" id="@cdktn/provider-random.stringResource.StringResource.property.minNumericInput"></a>

```java
public java.lang.Number getMinNumericInput();
```

- *Type:* java.lang.Number

---

##### `minSpecialInput`<sup>Optional</sup> <a name="minSpecialInput" id="@cdktn/provider-random.stringResource.StringResource.property.minSpecialInput"></a>

```java
public java.lang.Number getMinSpecialInput();
```

- *Type:* java.lang.Number

---

##### `minUpperInput`<sup>Optional</sup> <a name="minUpperInput" id="@cdktn/provider-random.stringResource.StringResource.property.minUpperInput"></a>

```java
public java.lang.Number getMinUpperInput();
```

- *Type:* java.lang.Number

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktn/provider-random.stringResource.StringResource.property.numberInput"></a>

```java
public java.lang.Boolean|IResolvable getNumberInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numericInput`<sup>Optional</sup> <a name="numericInput" id="@cdktn/provider-random.stringResource.StringResource.property.numericInput"></a>

```java
public java.lang.Boolean|IResolvable getNumericInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `overrideSpecialInput`<sup>Optional</sup> <a name="overrideSpecialInput" id="@cdktn/provider-random.stringResource.StringResource.property.overrideSpecialInput"></a>

```java
public java.lang.String getOverrideSpecialInput();
```

- *Type:* java.lang.String

---

##### `specialInput`<sup>Optional</sup> <a name="specialInput" id="@cdktn/provider-random.stringResource.StringResource.property.specialInput"></a>

```java
public java.lang.Boolean|IResolvable getSpecialInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `upperInput`<sup>Optional</sup> <a name="upperInput" id="@cdktn/provider-random.stringResource.StringResource.property.upperInput"></a>

```java
public java.lang.Boolean|IResolvable getUpperInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keepers`<sup>Required</sup> <a name="keepers" id="@cdktn/provider-random.stringResource.StringResource.property.keepers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKeepers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktn/provider-random.stringResource.StringResource.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

---

##### `lower`<sup>Required</sup> <a name="lower" id="@cdktn/provider-random.stringResource.StringResource.property.lower"></a>

```java
public java.lang.Boolean|IResolvable getLower();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `minLower`<sup>Required</sup> <a name="minLower" id="@cdktn/provider-random.stringResource.StringResource.property.minLower"></a>

```java
public java.lang.Number getMinLower();
```

- *Type:* java.lang.Number

---

##### `minNumeric`<sup>Required</sup> <a name="minNumeric" id="@cdktn/provider-random.stringResource.StringResource.property.minNumeric"></a>

```java
public java.lang.Number getMinNumeric();
```

- *Type:* java.lang.Number

---

##### `minSpecial`<sup>Required</sup> <a name="minSpecial" id="@cdktn/provider-random.stringResource.StringResource.property.minSpecial"></a>

```java
public java.lang.Number getMinSpecial();
```

- *Type:* java.lang.Number

---

##### `minUpper`<sup>Required</sup> <a name="minUpper" id="@cdktn/provider-random.stringResource.StringResource.property.minUpper"></a>

```java
public java.lang.Number getMinUpper();
```

- *Type:* java.lang.Number

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-random.stringResource.StringResource.property.number"></a>

```java
public java.lang.Boolean|IResolvable getNumber();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numeric`<sup>Required</sup> <a name="numeric" id="@cdktn/provider-random.stringResource.StringResource.property.numeric"></a>

```java
public java.lang.Boolean|IResolvable getNumeric();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `overrideSpecial`<sup>Required</sup> <a name="overrideSpecial" id="@cdktn/provider-random.stringResource.StringResource.property.overrideSpecial"></a>

```java
public java.lang.String getOverrideSpecial();
```

- *Type:* java.lang.String

---

##### `special`<sup>Required</sup> <a name="special" id="@cdktn/provider-random.stringResource.StringResource.property.special"></a>

```java
public java.lang.Boolean|IResolvable getSpecial();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `upper`<sup>Required</sup> <a name="upper" id="@cdktn/provider-random.stringResource.StringResource.property.upper"></a>

```java
public java.lang.Boolean|IResolvable getUpper();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.stringResource.StringResource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-random.stringResource.StringResource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StringResourceConfig <a name="StringResourceConfig" id="@cdktn/provider-random.stringResource.StringResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-random.stringResource.StringResourceConfig.Initializer"></a>

```java
import io.cdktn.providers.random_provider.string_resource.StringResourceConfig;

StringResourceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .length(java.lang.Number)
//  .keepers(java.util.Map<java.lang.String, java.lang.String>)
//  .lower(java.lang.Boolean|IResolvable)
//  .minLower(java.lang.Number)
//  .minNumeric(java.lang.Number)
//  .minSpecial(java.lang.Number)
//  .minUpper(java.lang.Number)
//  .number(java.lang.Boolean|IResolvable)
//  .numeric(java.lang.Boolean|IResolvable)
//  .overrideSpecial(java.lang.String)
//  .special(java.lang.Boolean|IResolvable)
//  .upper(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.length">length</a></code> | <code>java.lang.Number</code> | The length of the string desired. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.keepers">keepers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.lower">lower</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.minLower">minLower</a></code> | <code>java.lang.Number</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.minNumeric">minNumeric</a></code> | <code>java.lang.Number</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.minSpecial">minSpecial</a></code> | <code>java.lang.Number</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.minUpper">minUpper</a></code> | <code>java.lang.Number</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.number">number</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.numeric">numeric</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.overrideSpecial">overrideSpecial</a></code> | <code>java.lang.String</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.special">special</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktn/provider-random.stringResource.StringResourceConfig.property.upper">upper</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#length StringResource#length}

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.keepers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKeepers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Arbitrary map of values that, when changed, will trigger recreation of resource.

See [the main provider documentation](../index.html) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#keepers StringResource#keepers}

---

##### `lower`<sup>Optional</sup> <a name="lower" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.lower"></a>

```java
public java.lang.Boolean|IResolvable getLower();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#lower StringResource#lower}

---

##### `minLower`<sup>Optional</sup> <a name="minLower" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.minLower"></a>

```java
public java.lang.Number getMinLower();
```

- *Type:* java.lang.Number

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#min_lower StringResource#min_lower}

---

##### `minNumeric`<sup>Optional</sup> <a name="minNumeric" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.minNumeric"></a>

```java
public java.lang.Number getMinNumeric();
```

- *Type:* java.lang.Number

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#min_numeric StringResource#min_numeric}

---

##### `minSpecial`<sup>Optional</sup> <a name="minSpecial" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.minSpecial"></a>

```java
public java.lang.Number getMinSpecial();
```

- *Type:* java.lang.Number

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#min_special StringResource#min_special}

---

##### `minUpper`<sup>Optional</sup> <a name="minUpper" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.minUpper"></a>

```java
public java.lang.Number getMinUpper();
```

- *Type:* java.lang.Number

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#min_upper StringResource#min_upper}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.number"></a>

```java
public java.lang.Boolean|IResolvable getNumber();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include numeric characters in the result.

Default value is `true`. If `number`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`. **NOTE**: This is deprecated, use `numeric` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#number StringResource#number}

---

##### `numeric`<sup>Optional</sup> <a name="numeric" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.numeric"></a>

```java
public java.lang.Boolean|IResolvable getNumeric();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include numeric characters in the result.

Default value is `true`. If `numeric`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#numeric StringResource#numeric}

---

##### `overrideSpecial`<sup>Optional</sup> <a name="overrideSpecial" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.overrideSpecial"></a>

```java
public java.lang.String getOverrideSpecial();
```

- *Type:* java.lang.String

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#override_special StringResource#override_special}

---

##### `special`<sup>Optional</sup> <a name="special" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.special"></a>

```java
public java.lang.Boolean|IResolvable getSpecial();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#special StringResource#special}

---

##### `upper`<sup>Optional</sup> <a name="upper" id="@cdktn/provider-random.stringResource.StringResourceConfig.property.upper"></a>

```java
public java.lang.Boolean|IResolvable getUpper();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/resources/string#upper StringResource#upper}

---



