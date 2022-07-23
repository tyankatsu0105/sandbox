<script>
export default {
  functional: true,
  props: {
    name: String
  },

  render(_, ctx) {
    console.log(ctx);
    
    return <div>{ctx.props.name}</div>
  }
}
</script>