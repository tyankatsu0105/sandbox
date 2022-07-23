<template>
  <div>
    <button type="button" @click="this.methodsReturnFunction">button</button>
    {{computedReturnBoolean}}
  </div>
</template>

<script>

export default {
  data() {
    return {
      dataString: 'dataString',
      dataNumber: 10,
      dataObject: {
        inside: "inside"
      },
      dataArray: [1,2,3,4,5],
      dataBoolean: true,
      dataFunction() {
        alert('dataFunction')
      }
    }
  },
  props: {
    propsString: {
      type: String
    },
    propsNumber: {
      type: Number
    },
    propsObject: {
      type: Object
    },
    propsArray: {
      type: Array
    },
    propsBoolean: {
      type: Boolean
    },
    propsFunction: {
      type: Function
    },
  },
  computed: {
    computedReturnString() {
      return 'computedReturnString'
    },
    computedReturnNumber() {
      return this.computedReturnString
    },
    computedReturnObject() {
      return {
        insideFn() {
          return 'insideFn'
        }
      }
    },
    computedReturnArray() {
      return [1,2,3,4,5]
    },
    computedReturnBoolean() {
      return this.methodsReturnString()
    },
    computedReturnFunction() {
      const fn = () => alert('computedReturnFunction')
      return fn
    }
  },
  methods: {
    methodsReturnString() {
      return 'methodsReturnString'
    },
    methodsReturnNumber() {
      return 'methodsReturnNumber'
    },
    methodsReturnObject() {
      return {
        inside: "inside"
      }
    },
    methodsReturnArray() {
      return [1,2,3,4,5]
    },
    methodsReturnBoolean() {
      return true
    },
    methodsReturnFunction() {
      console.log(this.computedReturnObject.insideFn());
    }
  }
}
</script>