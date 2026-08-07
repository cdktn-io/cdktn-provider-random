# `ephemeralRandomBytes` Submodule <a name="`ephemeralRandomBytes` Submodule" id="@cdktn/provider-random.ephemeralRandomBytes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralRandomBytes <a name="EphemeralRandomBytes" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/bytes random_bytes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer"></a>

```python
from cdktn_provider_random import ephemeral_random_bytes

ephemeralRandomBytes.EphemeralRandomBytes(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  length: typing.Union[int, float]
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.length">length</a></code> | <code>typing.Union[int, float]</code> | The number of bytes requested. The minimum value for length is 1. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.Initializer.parameter.length"></a>

- *Type:* typing.Union[int, float]

The number of bytes requested. The minimum value for length is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/bytes#length EphemeralRandomBytes#length}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isConstruct"></a>

```python
from cdktn_provider_random import ephemeral_random_bytes

ephemeralRandomBytes.EphemeralRandomBytes.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformElement"></a>

```python
from cdktn_provider_random import ephemeral_random_bytes

ephemeralRandomBytes.EphemeralRandomBytes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_random import ephemeral_random_bytes

ephemeralRandomBytes.EphemeralRandomBytes.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.base64">base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.hex">hex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.lengthInput">length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `base64`<sup>Required</sup> <a name="base64" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.base64"></a>

```python
base64: str
```

- *Type:* str

---

##### `hex`<sup>Required</sup> <a name="hex" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.hex"></a>

```python
hex: str
```

- *Type:* str

---

##### `length_input`<sup>Optional</sup> <a name="length_input" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.lengthInput"></a>

```python
length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralRandomBytesConfig <a name="EphemeralRandomBytesConfig" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.Initializer"></a>

```python
from cdktn_provider_random import ephemeral_random_bytes

ephemeralRandomBytes.EphemeralRandomBytesConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  length: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.length">length</a></code> | <code>typing.Union[int, float]</code> | The number of bytes requested. The minimum value for length is 1. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktn/provider-random.ephemeralRandomBytes.EphemeralRandomBytesConfig.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of bytes requested. The minimum value for length is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/bytes#length EphemeralRandomBytes#length}

---



