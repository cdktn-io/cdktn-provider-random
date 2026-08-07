# `ephemeralRandomPassword` Submodule <a name="`ephemeralRandomPassword` Submodule" id="@cdktn/provider-random.ephemeralRandomPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralRandomPassword <a name="EphemeralRandomPassword" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password random_password}.

#### Initializers <a name="Initializers" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer"></a>

```java
import io.cdktn.providers.random_provider.ephemeral_random_password.EphemeralRandomPassword;

EphemeralRandomPassword.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .length(java.lang.Number)
//  .lower(java.lang.Boolean|IResolvable)
//  .minLower(java.lang.Number)
//  .minNumeric(java.lang.Number)
//  .minSpecial(java.lang.Number)
//  .minUpper(java.lang.Number)
//  .numeric(java.lang.Boolean|IResolvable)
//  .overrideSpecial(java.lang.String)
//  .special(java.lang.Boolean|IResolvable)
//  .upper(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.length">length</a></code> | <code>java.lang.Number</code> | The length of the string desired. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.lower">lower</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.minLower">minLower</a></code> | <code>java.lang.Number</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.minNumeric">minNumeric</a></code> | <code>java.lang.Number</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.minSpecial">minSpecial</a></code> | <code>java.lang.Number</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.minUpper">minUpper</a></code> | <code>java.lang.Number</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.numeric">numeric</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.overrideSpecial">overrideSpecial</a></code> | <code>java.lang.String</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.special">special</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.upper">upper</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.length"></a>

- *Type:* java.lang.Number

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#length EphemeralRandomPassword#length}

---

##### `lower`<sup>Optional</sup> <a name="lower" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.lower"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#lower EphemeralRandomPassword#lower}

---

##### `minLower`<sup>Optional</sup> <a name="minLower" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.minLower"></a>

- *Type:* java.lang.Number

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#min_lower EphemeralRandomPassword#min_lower}

---

##### `minNumeric`<sup>Optional</sup> <a name="minNumeric" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.minNumeric"></a>

- *Type:* java.lang.Number

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#min_numeric EphemeralRandomPassword#min_numeric}

---

##### `minSpecial`<sup>Optional</sup> <a name="minSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.minSpecial"></a>

- *Type:* java.lang.Number

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#min_special EphemeralRandomPassword#min_special}

---

##### `minUpper`<sup>Optional</sup> <a name="minUpper" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.minUpper"></a>

- *Type:* java.lang.Number

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#min_upper EphemeralRandomPassword#min_upper}

---

##### `numeric`<sup>Optional</sup> <a name="numeric" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.numeric"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include numeric characters in the result.

Default value is `true`. If `numeric`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#numeric EphemeralRandomPassword#numeric}

---

##### `overrideSpecial`<sup>Optional</sup> <a name="overrideSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.overrideSpecial"></a>

- *Type:* java.lang.String

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#override_special EphemeralRandomPassword#override_special}

---

##### `special`<sup>Optional</sup> <a name="special" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.special"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#special EphemeralRandomPassword#special}

---

##### `upper`<sup>Optional</sup> <a name="upper" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.upper"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#upper EphemeralRandomPassword#upper}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetLower">resetLower</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinLower">resetMinLower</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinNumeric">resetMinNumeric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinSpecial">resetMinSpecial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinUpper">resetMinUpper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetNumeric">resetNumeric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetOverrideSpecial">resetOverrideSpecial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetSpecial">resetSpecial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetUpper">resetUpper</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetLower` <a name="resetLower" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetLower"></a>

```java
public void resetLower()
```

##### `resetMinLower` <a name="resetMinLower" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinLower"></a>

```java
public void resetMinLower()
```

##### `resetMinNumeric` <a name="resetMinNumeric" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinNumeric"></a>

```java
public void resetMinNumeric()
```

##### `resetMinSpecial` <a name="resetMinSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinSpecial"></a>

```java
public void resetMinSpecial()
```

##### `resetMinUpper` <a name="resetMinUpper" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinUpper"></a>

```java
public void resetMinUpper()
```

##### `resetNumeric` <a name="resetNumeric" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetNumeric"></a>

```java
public void resetNumeric()
```

##### `resetOverrideSpecial` <a name="resetOverrideSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetOverrideSpecial"></a>

```java
public void resetOverrideSpecial()
```

##### `resetSpecial` <a name="resetSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetSpecial"></a>

```java
public void resetSpecial()
```

##### `resetUpper` <a name="resetUpper" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetUpper"></a>

```java
public void resetUpper()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isConstruct"></a>

```java
import io.cdktn.providers.random_provider.ephemeral_random_password.EphemeralRandomPassword;

EphemeralRandomPassword.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isTerraformElement"></a>

```java
import io.cdktn.providers.random_provider.ephemeral_random_password.EphemeralRandomPassword;

EphemeralRandomPassword.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.random_provider.ephemeral_random_password.EphemeralRandomPassword;

EphemeralRandomPassword.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.bcryptHash">bcryptHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.result">result</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lengthInput">lengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lowerInput">lowerInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minLowerInput">minLowerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minNumericInput">minNumericInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minSpecialInput">minSpecialInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minUpperInput">minUpperInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.numericInput">numericInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.overrideSpecialInput">overrideSpecialInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.specialInput">specialInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.upperInput">upperInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.length">length</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lower">lower</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minLower">minLower</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minNumeric">minNumeric</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minSpecial">minSpecial</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minUpper">minUpper</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.numeric">numeric</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.overrideSpecial">overrideSpecial</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.special">special</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.upper">upper</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `bcryptHash`<sup>Required</sup> <a name="bcryptHash" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.bcryptHash"></a>

```java
public java.lang.String getBcryptHash();
```

- *Type:* java.lang.String

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.result"></a>

```java
public java.lang.String getResult();
```

- *Type:* java.lang.String

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lengthInput"></a>

```java
public java.lang.Number getLengthInput();
```

- *Type:* java.lang.Number

---

##### `lowerInput`<sup>Optional</sup> <a name="lowerInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lowerInput"></a>

```java
public java.lang.Boolean|IResolvable getLowerInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `minLowerInput`<sup>Optional</sup> <a name="minLowerInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minLowerInput"></a>

```java
public java.lang.Number getMinLowerInput();
```

- *Type:* java.lang.Number

---

##### `minNumericInput`<sup>Optional</sup> <a name="minNumericInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minNumericInput"></a>

```java
public java.lang.Number getMinNumericInput();
```

- *Type:* java.lang.Number

---

##### `minSpecialInput`<sup>Optional</sup> <a name="minSpecialInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minSpecialInput"></a>

```java
public java.lang.Number getMinSpecialInput();
```

- *Type:* java.lang.Number

---

##### `minUpperInput`<sup>Optional</sup> <a name="minUpperInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minUpperInput"></a>

```java
public java.lang.Number getMinUpperInput();
```

- *Type:* java.lang.Number

---

##### `numericInput`<sup>Optional</sup> <a name="numericInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.numericInput"></a>

```java
public java.lang.Boolean|IResolvable getNumericInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `overrideSpecialInput`<sup>Optional</sup> <a name="overrideSpecialInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.overrideSpecialInput"></a>

```java
public java.lang.String getOverrideSpecialInput();
```

- *Type:* java.lang.String

---

##### `specialInput`<sup>Optional</sup> <a name="specialInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.specialInput"></a>

```java
public java.lang.Boolean|IResolvable getSpecialInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `upperInput`<sup>Optional</sup> <a name="upperInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.upperInput"></a>

```java
public java.lang.Boolean|IResolvable getUpperInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

---

##### `lower`<sup>Required</sup> <a name="lower" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lower"></a>

```java
public java.lang.Boolean|IResolvable getLower();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `minLower`<sup>Required</sup> <a name="minLower" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minLower"></a>

```java
public java.lang.Number getMinLower();
```

- *Type:* java.lang.Number

---

##### `minNumeric`<sup>Required</sup> <a name="minNumeric" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minNumeric"></a>

```java
public java.lang.Number getMinNumeric();
```

- *Type:* java.lang.Number

---

##### `minSpecial`<sup>Required</sup> <a name="minSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minSpecial"></a>

```java
public java.lang.Number getMinSpecial();
```

- *Type:* java.lang.Number

---

##### `minUpper`<sup>Required</sup> <a name="minUpper" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minUpper"></a>

```java
public java.lang.Number getMinUpper();
```

- *Type:* java.lang.Number

---

##### `numeric`<sup>Required</sup> <a name="numeric" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.numeric"></a>

```java
public java.lang.Boolean|IResolvable getNumeric();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `overrideSpecial`<sup>Required</sup> <a name="overrideSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.overrideSpecial"></a>

```java
public java.lang.String getOverrideSpecial();
```

- *Type:* java.lang.String

---

##### `special`<sup>Required</sup> <a name="special" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.special"></a>

```java
public java.lang.Boolean|IResolvable getSpecial();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `upper`<sup>Required</sup> <a name="upper" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.upper"></a>

```java
public java.lang.Boolean|IResolvable getUpper();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralRandomPasswordConfig <a name="EphemeralRandomPasswordConfig" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.Initializer"></a>

```java
import io.cdktn.providers.random_provider.ephemeral_random_password.EphemeralRandomPasswordConfig;

EphemeralRandomPasswordConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .length(java.lang.Number)
//  .lower(java.lang.Boolean|IResolvable)
//  .minLower(java.lang.Number)
//  .minNumeric(java.lang.Number)
//  .minSpecial(java.lang.Number)
//  .minUpper(java.lang.Number)
//  .numeric(java.lang.Boolean|IResolvable)
//  .overrideSpecial(java.lang.String)
//  .special(java.lang.Boolean|IResolvable)
//  .upper(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.length">length</a></code> | <code>java.lang.Number</code> | The length of the string desired. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.lower">lower</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minLower">minLower</a></code> | <code>java.lang.Number</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minNumeric">minNumeric</a></code> | <code>java.lang.Number</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minSpecial">minSpecial</a></code> | <code>java.lang.Number</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minUpper">minUpper</a></code> | <code>java.lang.Number</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.numeric">numeric</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include numeric characters in the result. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.overrideSpecial">overrideSpecial</a></code> | <code>java.lang.String</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.special">special</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.upper">upper</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#length EphemeralRandomPassword#length}

---

##### `lower`<sup>Optional</sup> <a name="lower" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.lower"></a>

```java
public java.lang.Boolean|IResolvable getLower();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#lower EphemeralRandomPassword#lower}

---

##### `minLower`<sup>Optional</sup> <a name="minLower" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minLower"></a>

```java
public java.lang.Number getMinLower();
```

- *Type:* java.lang.Number

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#min_lower EphemeralRandomPassword#min_lower}

---

##### `minNumeric`<sup>Optional</sup> <a name="minNumeric" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minNumeric"></a>

```java
public java.lang.Number getMinNumeric();
```

- *Type:* java.lang.Number

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#min_numeric EphemeralRandomPassword#min_numeric}

---

##### `minSpecial`<sup>Optional</sup> <a name="minSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minSpecial"></a>

```java
public java.lang.Number getMinSpecial();
```

- *Type:* java.lang.Number

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#min_special EphemeralRandomPassword#min_special}

---

##### `minUpper`<sup>Optional</sup> <a name="minUpper" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minUpper"></a>

```java
public java.lang.Number getMinUpper();
```

- *Type:* java.lang.Number

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#min_upper EphemeralRandomPassword#min_upper}

---

##### `numeric`<sup>Optional</sup> <a name="numeric" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.numeric"></a>

```java
public java.lang.Boolean|IResolvable getNumeric();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include numeric characters in the result.

Default value is `true`. If `numeric`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#numeric EphemeralRandomPassword#numeric}

---

##### `overrideSpecial`<sup>Optional</sup> <a name="overrideSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.overrideSpecial"></a>

```java
public java.lang.String getOverrideSpecial();
```

- *Type:* java.lang.String

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#override_special EphemeralRandomPassword#override_special}

---

##### `special`<sup>Optional</sup> <a name="special" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.special"></a>

```java
public java.lang.Boolean|IResolvable getSpecial();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#special EphemeralRandomPassword#special}

---

##### `upper`<sup>Optional</sup> <a name="upper" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.upper"></a>

```java
public java.lang.Boolean|IResolvable getUpper();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#upper EphemeralRandomPassword#upper}

---



