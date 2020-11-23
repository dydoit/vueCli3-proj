<template>
    <div>
        首页
        <form-diy :formConf="obj"></form-diy>
    </div>
</template>

<script>
const json = {
  "fields": [{
    "__config__": {
      "label": "姓名",
      "labelWidth": null,
      "showLabel": true,
      "changeTag": true,
      "tag": "el-input",
      "tagIcon": "input",
      "required": true,
      "layout": "colFormItem",
      "span": 12,
      "document": "https://element.eleme.cn/#/zh-CN/component/input",
      "regList": [],
      "formId": 103,
      "renderKey": "1031606097259598"
    },
    "__slot__": {
      "prepend": "",
      "append": ""
    },
    "placeholder": "请输入姓名",
    "style": {
      "width": "100%"
    },
    "clearable": true,
    "prefix-icon": "",
    "suffix-icon": "",
    "maxlength": null,
    "show-word-limit": false,
    "readonly": false,
    "disabled": false,
    "__vModel__": "field103"
  }, {
    "__config__": {
      "label": "手机号码",
      "labelWidth": null,
      "showLabel": true,
      "changeTag": true,
      "tag": "el-input",
      "tagIcon": "input",
      "required": true,
      "layout": "colFormItem",
      "span": 12,
      "document": "https://element.eleme.cn/#/zh-CN/component/input",
      "regList": [],
      "formId": 101,
      "renderKey": "1011606097252519"
    },
    "__slot__": {
      "prepend": "",
      "append": ""
    },
    "placeholder": "请输入手机号码",
    "style": {
      "width": "100%"
    },
    "clearable": true,
    "prefix-icon": "",
    "suffix-icon": "",
    "maxlength": null,
    "show-word-limit": false,
    "readonly": false,
    "disabled": false,
    "__vModel__": "field101"
  }, {
    "__config__": {
      "label": "描述",
      "labelWidth": null,
      "showLabel": true,
      "tag": "el-input",
      "tagIcon": "textarea",
      "required": true,
      "layout": "colFormItem",
      "span": 24,
      "regList": [],
      "changeTag": true,
      "document": "https://element.eleme.cn/#/zh-CN/component/input",
      "formId": 102,
      "renderKey": "1021606097255693"
    },
    "type": "textarea",
    "placeholder": "请输入描述",
    "autosize": {
      "minRows": 4,
      "maxRows": 4
    },
    "style": {
      "width": "100%"
    },
    "maxlength": null,
    "show-word-limit": false,
    "readonly": false,
    "disabled": false,
    "__vModel__": "field102"
  }, {
    "__config__": {
      "label": "级联选择",
      "url": "https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList",
      "method": "get",
      "dataKey": "list",
      "showLabel": true,
      "labelWidth": null,
      "tag": "el-cascader",
      "tagIcon": "cascader",
      "layout": "colFormItem",
      "defaultValue": [],
      "dataType": "dynamic",
      "span": 12,
      "required": true,
      "regList": [],
      "changeTag": true,
      "document": "https://element.eleme.cn/#/zh-CN/component/cascader",
      "formId": 104,
      "renderKey": "1041606097346543"
    },
    "options": [{
      "id": 1,
      "value": 1,
      "label": "选项1",
      "children": [{
        "id": 2,
        "value": 2,
        "label": "选项1-1"
      }]
    }],
    "placeholder": "请选择级联选择",
    "style": {
      "width": "100%"
    },
    "props": {
      "props": {
        "multiple": false,
        "label": "label",
        "value": "value",
        "children": "children"
      }
    },
    "show-all-levels": true,
    "disabled": false,
    "clearable": true,
    "filterable": false,
    "separator": "/",
    "__vModel__": "field104"
  }, {
    "__config__": {
      "label": "下拉选择",
      "showLabel": true,
      "labelWidth": null,
      "tag": "el-select",
      "tagIcon": "select",
      "layout": "colFormItem",
      "span": 12,
      "required": true,
      "regList": [],
      "changeTag": true,
      "document": "https://element.eleme.cn/#/zh-CN/component/select",
      "formId": 105,
      "renderKey": "1051606097351614"
    },
    "__slot__": {
      "options": [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }]
    },
    "placeholder": "请选择下拉选择",
    "style": {
      "width": "100%"
    },
    "clearable": true,
    "disabled": false,
    "filterable": false,
    "multiple": false,
    "__vModel__": "field105"
  }, {
    "__config__": {
      "label": "时间范围",
      "tag": "el-time-picker",
      "tagIcon": "time-range",
      "span": 12,
      "showLabel": true,
      "labelWidth": null,
      "layout": "colFormItem",
      "defaultValue": null,
      "required": true,
      "regList": [],
      "changeTag": true,
      "document": "https://element.eleme.cn/#/zh-CN/component/time-picker",
      "formId": 106,
      "renderKey": "1061606097359456"
    },
    "style": {
      "width": "100%"
    },
    "disabled": false,
    "clearable": true,
    "is-range": true,
    "range-separator": "至",
    "start-placeholder": "开始时间",
    "end-placeholder": "结束时间",
    "format": "HH:mm:ss",
    "value-format": "HH:mm:ss",
    "__vModel__": "field106"
  }, {
    "__config__": {
      "label": "上传",
      "tag": "el-upload",
      "tagIcon": "upload",
      "layout": "colFormItem",
      "defaultValue": null,
      "showLabel": true,
      "labelWidth": null,
      "required": true,
      "span": 24,
      "showTip": false,
      "buttonText": "点击上传",
      "regList": [],
      "changeTag": true,
      "fileSize": 2,
      "sizeUnit": "MB",
      "document": "https://element.eleme.cn/#/zh-CN/component/upload",
      "formId": 107,
      "renderKey": "1071606097367611"
    },
    "__slot__": {
      "list-type": true
    },
    "action": "https://jsonplaceholder.typicode.com/posts/",
    "disabled": false,
    "accept": "",
    "name": "file",
    "auto-upload": true,
    "list-type": "text",
    "multiple": false,
    "__vModel__": "field107"
  }],
  "formRef": "elForm",
  "formModel": "formData",
  "size": "small",
  "labelPosition": "left",
  "labelWidth": 100,
  "formRules": "rules",
  "gutter": 15,
  "disabled": false,
  "span": 24,
  "formBtns": true
}
import FormDiy from '@/views/index/components/FormDiy'
    export default {
        data() {
            return {
                obj:json
            }
        },
        created () {
            let arr  = this.obj.fields
            arr.forEach(elem => {
                if(elem.__config__&&elem.__config__.dataType==='dynamic') {
                    this.getOptions(elem.__config__.method,elem.__config__.url,elem.__config__.dataKey)
                }
            })

        },
        methods: {
            async getOptions(methodType,url,dataKey){
                let {data} = await this.$axios({
                    method:methodType,
                    url
                })
                console.log(data[dataKey])
            }
        },
        components: {
            FormDiy,
        },
    }
</script>

<style lang="stylus" scoped>

</style>