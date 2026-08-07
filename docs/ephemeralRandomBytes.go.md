# `ephemeralRandomBytes` Submodule <a name="`ephemeralRandomBytes` Submodule" id="@cdktn/provider-random.ephemeralRandomBytes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralRandomBytes <a name="EphemeralRandomBytes" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/bytes random_bytes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-random-go/random/v14/ephemeralrandombytes"

ephemeralrandombytes.NewEphemeralRandomBytes(scope Construct, id *string, config EphemeralRandomBytesConfig) EphemeralRandomBytes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig">EphemeralRandomBytesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig">EphemeralRandomBytesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-random-go/random/v14/ephemeralrandombytes"

ephemeralrandombytes.EphemeralRandomBytes_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-random-go/random/v14/ephemeralrandombytes"

ephemeralrandombytes.EphemeralRandomBytes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-random-go/random/v14/ephemeralrandombytes"

ephemeralrandombytes.EphemeralRandomBytes_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.base64">Base64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.hex">Hex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.lengthInput">LengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.length">Length</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Base64`<sup>Required</sup> <a name="Base64" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.base64"></a>

```go
func Base64() *string
```

- *Type:* *string

---

##### `Hex`<sup>Required</sup> <a name="Hex" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.hex"></a>

```go
func Hex() *string
```

- *Type:* *string

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.lengthInput"></a>

```go
func LengthInput() *f64
```

- *Type:* *f64

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralRandomBytesConfig <a name="EphemeralRandomBytesConfig" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-random-go/random/v14/ephemeralrandombytes"

&ephemeralrandombytes.EphemeralRandomBytesConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Length: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.length">Length</a></code> | <code>*f64</code> | The number of bytes requested. The minimum value for length is 1. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.length"></a>

```go
Length *f64
```

- *Type:* *f64

The number of bytes requested. The minimum value for length is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/bytes#length EphemeralRandomBytes#length}

---



