# `ephemeralRandomPassword` Submodule <a name="`ephemeralRandomPassword` Submodule" id="@cdktn/provider-random.ephemeralRandomPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralRandomPassword <a name="EphemeralRandomPassword" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password random_password}.

#### Initializers <a name="Initializers" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-random-go/random/v14/ephemeralrandompassword"

ephemeralrandompassword.NewEphemeralRandomPassword(scope Construct, id *string, config EphemeralRandomPasswordConfig) EphemeralRandomPassword
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig">EphemeralRandomPasswordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig">EphemeralRandomPasswordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetLower">ResetLower</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinLower">ResetMinLower</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinNumeric">ResetMinNumeric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinSpecial">ResetMinSpecial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinUpper">ResetMinUpper</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetNumeric">ResetNumeric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetOverrideSpecial">ResetOverrideSpecial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetSpecial">ResetSpecial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetUpper">ResetUpper</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetLower` <a name="ResetLower" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetLower"></a>

```go
func ResetLower()
```

##### `ResetMinLower` <a name="ResetMinLower" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinLower"></a>

```go
func ResetMinLower()
```

##### `ResetMinNumeric` <a name="ResetMinNumeric" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinNumeric"></a>

```go
func ResetMinNumeric()
```

##### `ResetMinSpecial` <a name="ResetMinSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinSpecial"></a>

```go
func ResetMinSpecial()
```

##### `ResetMinUpper` <a name="ResetMinUpper" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetMinUpper"></a>

```go
func ResetMinUpper()
```

##### `ResetNumeric` <a name="ResetNumeric" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetNumeric"></a>

```go
func ResetNumeric()
```

##### `ResetOverrideSpecial` <a name="ResetOverrideSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetOverrideSpecial"></a>

```go
func ResetOverrideSpecial()
```

##### `ResetSpecial` <a name="ResetSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetSpecial"></a>

```go
func ResetSpecial()
```

##### `ResetUpper` <a name="ResetUpper" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.resetUpper"></a>

```go
func ResetUpper()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-random-go/random/v14/ephemeralrandompassword"

ephemeralrandompassword.EphemeralRandomPassword_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-random-go/random/v14/ephemeralrandompassword"

ephemeralrandompassword.EphemeralRandomPassword_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-random-go/random/v14/ephemeralrandompassword"

ephemeralrandompassword.EphemeralRandomPassword_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.bcryptHash">BcryptHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.result">Result</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lengthInput">LengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lowerInput">LowerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minLowerInput">MinLowerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minNumericInput">MinNumericInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minSpecialInput">MinSpecialInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minUpperInput">MinUpperInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.numericInput">NumericInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.overrideSpecialInput">OverrideSpecialInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.specialInput">SpecialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.upperInput">UpperInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.length">Length</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lower">Lower</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minLower">MinLower</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minNumeric">MinNumeric</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minSpecial">MinSpecial</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minUpper">MinUpper</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.numeric">Numeric</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.overrideSpecial">OverrideSpecial</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.special">Special</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.upper">Upper</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BcryptHash`<sup>Required</sup> <a name="BcryptHash" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.bcryptHash"></a>

```go
func BcryptHash() *string
```

- *Type:* *string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.result"></a>

```go
func Result() *string
```

- *Type:* *string

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lengthInput"></a>

```go
func LengthInput() *f64
```

- *Type:* *f64

---

##### `LowerInput`<sup>Optional</sup> <a name="LowerInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lowerInput"></a>

```go
func LowerInput() interface{}
```

- *Type:* interface{}

---

##### `MinLowerInput`<sup>Optional</sup> <a name="MinLowerInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minLowerInput"></a>

```go
func MinLowerInput() *f64
```

- *Type:* *f64

---

##### `MinNumericInput`<sup>Optional</sup> <a name="MinNumericInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minNumericInput"></a>

```go
func MinNumericInput() *f64
```

- *Type:* *f64

---

##### `MinSpecialInput`<sup>Optional</sup> <a name="MinSpecialInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minSpecialInput"></a>

```go
func MinSpecialInput() *f64
```

- *Type:* *f64

---

##### `MinUpperInput`<sup>Optional</sup> <a name="MinUpperInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minUpperInput"></a>

```go
func MinUpperInput() *f64
```

- *Type:* *f64

---

##### `NumericInput`<sup>Optional</sup> <a name="NumericInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.numericInput"></a>

```go
func NumericInput() interface{}
```

- *Type:* interface{}

---

##### `OverrideSpecialInput`<sup>Optional</sup> <a name="OverrideSpecialInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.overrideSpecialInput"></a>

```go
func OverrideSpecialInput() *string
```

- *Type:* *string

---

##### `SpecialInput`<sup>Optional</sup> <a name="SpecialInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.specialInput"></a>

```go
func SpecialInput() interface{}
```

- *Type:* interface{}

---

##### `UpperInput`<sup>Optional</sup> <a name="UpperInput" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.upperInput"></a>

```go
func UpperInput() interface{}
```

- *Type:* interface{}

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

##### `Lower`<sup>Required</sup> <a name="Lower" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.lower"></a>

```go
func Lower() interface{}
```

- *Type:* interface{}

---

##### `MinLower`<sup>Required</sup> <a name="MinLower" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minLower"></a>

```go
func MinLower() *f64
```

- *Type:* *f64

---

##### `MinNumeric`<sup>Required</sup> <a name="MinNumeric" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minNumeric"></a>

```go
func MinNumeric() *f64
```

- *Type:* *f64

---

##### `MinSpecial`<sup>Required</sup> <a name="MinSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minSpecial"></a>

```go
func MinSpecial() *f64
```

- *Type:* *f64

---

##### `MinUpper`<sup>Required</sup> <a name="MinUpper" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.minUpper"></a>

```go
func MinUpper() *f64
```

- *Type:* *f64

---

##### `Numeric`<sup>Required</sup> <a name="Numeric" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.numeric"></a>

```go
func Numeric() interface{}
```

- *Type:* interface{}

---

##### `OverrideSpecial`<sup>Required</sup> <a name="OverrideSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.overrideSpecial"></a>

```go
func OverrideSpecial() *string
```

- *Type:* *string

---

##### `Special`<sup>Required</sup> <a name="Special" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.special"></a>

```go
func Special() interface{}
```

- *Type:* interface{}

---

##### `Upper`<sup>Required</sup> <a name="Upper" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.upper"></a>

```go
func Upper() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPassword.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralRandomPasswordConfig <a name="EphemeralRandomPasswordConfig" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-random-go/random/v14/ephemeralrandompassword"

&ephemeralrandompassword.EphemeralRandomPasswordConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Length: *f64,
	Lower: interface{},
	MinLower: *f64,
	MinNumeric: *f64,
	MinSpecial: *f64,
	MinUpper: *f64,
	Numeric: interface{},
	OverrideSpecial: *string,
	Special: interface{},
	Upper: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.length">Length</a></code> | <code>*f64</code> | The length of the string desired. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.lower">Lower</a></code> | <code>interface{}</code> | Include lowercase alphabet characters in the result. Default value is `true`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minLower">MinLower</a></code> | <code>*f64</code> | Minimum number of lowercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minNumeric">MinNumeric</a></code> | <code>*f64</code> | Minimum number of numeric characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minSpecial">MinSpecial</a></code> | <code>*f64</code> | Minimum number of special characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minUpper">MinUpper</a></code> | <code>*f64</code> | Minimum number of uppercase alphabet characters in the result. Default value is `0`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.numeric">Numeric</a></code> | <code>interface{}</code> | Include numeric characters in the result. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.overrideSpecial">OverrideSpecial</a></code> | <code>*string</code> | Supply your own list of special characters to use for string generation. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.special">Special</a></code> | <code>interface{}</code> | Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.upper">Upper</a></code> | <code>interface{}</code> | Include uppercase alphabet characters in the result. Default value is `true`. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.length"></a>

```go
Length *f64
```

- *Type:* *f64

The length of the string desired.

The minimum value for length is 1 and, length must also be >= (`min_upper` + `min_lower` + `min_numeric` + `min_special`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#length EphemeralRandomPassword#length}

---

##### `Lower`<sup>Optional</sup> <a name="Lower" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.lower"></a>

```go
Lower interface{}
```

- *Type:* interface{}

Include lowercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#lower EphemeralRandomPassword#lower}

---

##### `MinLower`<sup>Optional</sup> <a name="MinLower" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minLower"></a>

```go
MinLower *f64
```

- *Type:* *f64

Minimum number of lowercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#min_lower EphemeralRandomPassword#min_lower}

---

##### `MinNumeric`<sup>Optional</sup> <a name="MinNumeric" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minNumeric"></a>

```go
MinNumeric *f64
```

- *Type:* *f64

Minimum number of numeric characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#min_numeric EphemeralRandomPassword#min_numeric}

---

##### `MinSpecial`<sup>Optional</sup> <a name="MinSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minSpecial"></a>

```go
MinSpecial *f64
```

- *Type:* *f64

Minimum number of special characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#min_special EphemeralRandomPassword#min_special}

---

##### `MinUpper`<sup>Optional</sup> <a name="MinUpper" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.minUpper"></a>

```go
MinUpper *f64
```

- *Type:* *f64

Minimum number of uppercase alphabet characters in the result. Default value is `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#min_upper EphemeralRandomPassword#min_upper}

---

##### `Numeric`<sup>Optional</sup> <a name="Numeric" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.numeric"></a>

```go
Numeric interface{}
```

- *Type:* interface{}

Include numeric characters in the result.

Default value is `true`. If `numeric`, `upper`, `lower`, and `special` are all configured, at least one of them must be set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#numeric EphemeralRandomPassword#numeric}

---

##### `OverrideSpecial`<sup>Optional</sup> <a name="OverrideSpecial" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.overrideSpecial"></a>

```go
OverrideSpecial *string
```

- *Type:* *string

Supply your own list of special characters to use for string generation.

This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#override_special EphemeralRandomPassword#override_special}

---

##### `Special`<sup>Optional</sup> <a name="Special" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.special"></a>

```go
Special interface{}
```

- *Type:* interface{}

Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#special EphemeralRandomPassword#special}

---

##### `Upper`<sup>Optional</sup> <a name="Upper" id="@cdktn/provider-random.ephemeralRandomPassword.EphemeralRandomPasswordConfig.property.upper"></a>

```go
Upper interface{}
```

- *Type:* interface{}

Include uppercase alphabet characters in the result. Default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/password#upper EphemeralRandomPassword#upper}

---



