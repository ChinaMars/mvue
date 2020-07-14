<template>
  <div class="content select-content">
    <demo-title>
      <h1 slot="title-name">Select 选择器</h1>
      <p slot="des">当选项过多时，使用下拉菜单展示并选择内容。</p>
    </demo-title>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">基础用法</h2>
        <p slot="des">适用广泛的基础单选。</p>
      </demo-title>
      <template slot="code">
        <mv-select
          v-model="value"
          placeholder="请选择"
        >
          <mv-option
            v-for="(item, Itemindex) in options"
            :key="Itemindex"
            :label="item.label"
            :value="item.value"
          ></mv-option>
        </mv-select>
      </template>
      <template slot="codeStr">{{codeStr.code1}}</template>
    </demo-block>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">禁用状态</h2>
        <p slot="des">选择器不可用状态。</p>
      </demo-title>
      <template slot="code">
        <mv-select
          v-model="value"
          placeholder="请选择"
          :disabled="true"
        >
          <mv-option
            v-for="(item, Itemindex) in options"
            :key="Itemindex"
            :label="item.label"
            :value="item.value"
          ></mv-option>
        </mv-select>
      </template>
      <template slot="codeStr">{{codeStr.code1}}</template>
    </demo-block>
    <demo-block>
      <demo-title slot="use-title">
        <h2 slot="title-name">省市区三级联动</h2>
        <p slot="des">填写地址时常见的省市区选择。<a href="../assets/mock/address.json">省市区json格式</a></p>
      </demo-title>
      <template slot="code">
        <mv-select
          v-model="address.regionModel"
          :placeholder="address.region.placeholder"
          :disabled="address.region.disabled"
          :scroll-bar="scrollBar"
        >
          <mv-option
            v-for="(item, Itemindex) in address.region.options"
            :key="Itemindex"
            :label="item.name"
            :value="item.code"
          ></mv-option>
        </mv-select>
        <mv-select
          v-model="address.cityModel"
          :placeholder="address.city.placeholder"
          :disabled="address.city.disabled"
          :scroll-bar="scrollBar"
        >
          <mv-option
            v-for="(item, Itemindex) in address.city.options"
            :key="Itemindex"
            :label="item.name"
            :value="item.code"
          ></mv-option>
        </mv-select>
        <mv-select
          v-model="address.districtModel"
          :placeholder="address.district.placeholder"
          :disabled="address.district.disabled"
          :scroll-bar="scrollBar"
        >
          <mv-option
            v-for="(item, Itemindex) in address.district.options"
            :key="Itemindex"
            :label="item.name"
            :value="item.code"
          ></mv-option>
        </mv-select>
      </template>
      <template slot="codeStr">{{codeStr.code3}}</template>
    </demo-block>
  </div>
</template>

<script>
import mixin from '../src/mixin'
import address from '../public/assets/mock/address'

export default {
  data() {
    return {
      scrollBar: true,
      options: [{
        value: 0,
        label: '蜘蛛侠'
      },{
        value: 1,
        label: '钢铁侠'
      }],
      value: 1,
      address: {
        regionModel: '',
        cityModel: '',
        districtModel: '',
        region: {
          placeholder: '请选择省',
          disabled: false,
          options: {}
        },
        city: {
          placeholder: '请选择市',
          disabled: true,
          options: {}
        },
        district: {
          placeholder: '请选择区',
          disabled: true,
          options: {}
        }
      },
      codeStr: {
        code1: `
          <mv-select
            v-model="value"
            placeholder="请选择"
          >
            <mv-option
              v-for="(item, Itemindex) in options"
              :key="Itemindex"
              :label="item.label"
              :value="item.value"
            ></mv-option>
          </mv-select>
          <script>
            export default {
              data() {
                return {
                 options: [{
                  value: 0,
                  label: '蜘蛛侠'
                },{
                  value: 1,
                  label: '钢铁侠'
                }],
                value: ''
                }
              }
            }
          <\/script>
        `,
        code2: `
          <mv-select
            v-model="value"
            placeholder="请选择"
            :disabled="true"
          >
            <mv-option
              v-for="(item, Itemindex) in options"
              :key="Itemindex"
              :label="item.label"
              :value="item.value"
            ></mv-option>
          </mv-select>
          <script>
            export default {
              data() {
                return {
                 options: [{
                  value: 0,
                  label: '蜘蛛侠'
                },{
                  value: 1,
                  label: '钢铁侠'
                }],
                value: ''
                }
              }
            }
          <\/script>
        `,
        code3: `
          <mv-select
            v-model="address.regionModel"
            :placeholder="address.region.placeholder"
            :disabled="address.region.disabled"
            :scroll-bar="scrollBar"
          >
            <mv-option
              v-for="(item, Itemindex) in address.region.options"
              :key="Itemindex"
              :label="item.name"
              :value="item.code"
            ></mv-option>
          </mv-select>
          <mv-select
            v-model="address.cityModel"
            :placeholder="address.city.placeholder"
            :disabled="address.city.disabled"
            :scroll-bar="scrollBar"
          >
            <mv-option
              v-for="(item, Itemindex) in address.city.options"
              :key="Itemindex"
              :label="item.name"
              :value="item.code"
            ></mv-option>
          </mv-select>
          <mv-select
            v-model="address.districtModel"
            :placeholder="address.district.placeholder"
            :disabled="address.district.disabled"
            :scroll-bar="scrollBar"
          >
            <mv-option
              v-for="(item, Itemindex) in address.district.options"
              :key="Itemindex"
              :label="item.name"
              :value="item.code"
            ></mv-option>
          </mv-select>
          <script>
            export default {
              data() {
                return {
                  scrollBar: true,
                  address: {
                    regionModel: '',
                    cityModel: '',
                    districtModel: '',
                    region: {
                      placeholder: '请选择省',
                      disabled: false,
                      options: {}
                    },
                    city: {
                      placeholder: '请选择市',
                      disabled: true,
                      options: {}
                    },
                    district: {
                      placeholder: '请选择区',
                      disabled: true,
                      options: {}
                    }
                  }
                }
              },
              watch: {
                'address.regionModel': {
                  immediate: true,
                  handler (value) {
                    const allAddress = address.data
                    this.address.cityModel = ''
                    this.address.districtModel = ''
                    if (value !== '') {
                      this.address.city.disabled = false
                    } else {
                      this.address.city.disabled = true
                    }
                    for (const i in allAddress.region) {
                      for (const key in allAddress.region[i]) {
                        if (allAddress.region[i][key].code === value) {
                          this.address.city.options = allAddress.city[key]
                        }
                      }
                    }
                  }
                },
                'address.cityModel': {
                  handler: function(newVal) {
                    const allAddress = address.data
                    this.address.districtModel = ''
                    this.address.district.disabled = false
                    for (const i in allAddress.district) {
                      for (const key in allAddress.district[i]) {
                        if (allAddress.district[i][key].code === newVal) {
                          this.address.district.options = allAddress.district[key]
                        }
                      }
                    }
                  }
                }
              }
            }
          <\/script>
        `
      }
    }
  },
  mixins: [mixin],
  watch: {
    'address.regionModel': {
      immediate: true,
      handler (value) {
        const allAddress = address.data
        this.address.cityModel = ''
        this.address.districtModel = ''
        if (value !== '') {
          this.address.city.disabled = false
        } else {
          this.address.city.disabled = true
        }
        for (const i in allAddress.region) {
          for (const key in allAddress.region[i]) {
            if (allAddress.region[i][key].code === value) {
              this.address.city.options = allAddress.city[key]
            }
          }
        }
      }
    },
    'address.cityModel': {
      handler: function(newVal) {
        const allAddress = address.data
        this.address.districtModel = ''
        this.address.district.disabled = false
        for (const i in allAddress.district) {
          for (const key in allAddress.district[i]) {
            if (allAddress.district[i][key].code === newVal) {
              this.address.district.options = allAddress.district[key]
            }
          }
        }
      }
    }
  },
  created () {
    const allAddress = address.data
    for (const key in allAddress.region) {
      Object.assign(this.address.region.options, allAddress.region[key])
    }
  }
}
</script>

<style lang="scss">
  .select-content{
    .source{
      display: flex;
    }
    .mv-select{
      margin-left: 10px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
</style>
