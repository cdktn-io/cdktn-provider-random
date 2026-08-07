/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/bytes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralRandomBytesConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * The number of bytes requested. The minimum value for length is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/bytes#length EphemeralRandomBytes#length}
  */
  readonly length: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/bytes random_bytes}
*/
export class EphemeralRandomBytes extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "random_bytes";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/random/3.9.0/docs/ephemeral-resources/bytes random_bytes} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralRandomBytesConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralRandomBytesConfig) {
    super(scope, id, {
      terraformResourceType: 'random_bytes',
      terraformGeneratorMetadata: {
        providerName: 'random',
        providerVersion: '3.9.0',
        providerVersionConstraint: '~> 3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._length = config.length;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64 - computed: true, optional: false, required: false
  public get base64() {
    return this.getStringAttribute('base64');
  }

  // hex - computed: true, optional: false, required: false
  public get hex() {
    return this.getStringAttribute('hex');
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      length: cdktn.numberToTerraform(this._length),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      length: {
        value: cdktn.numberToHclTerraform(this._length),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
