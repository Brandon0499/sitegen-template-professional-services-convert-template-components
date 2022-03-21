cd components
mkdir $1
cd $1
touch $1Variant1.vue
touch $1.component.vue

echo '<template>
  <!--  do some custom logic here-->
  <component :is="selectedComponent" />
</template>

<script lang="ts">
import '$1Variant1' from "./'$1Variant1'.vue";
export default {
  components: {'$1Variant1'},
  setup(){
    let selectedComponent = "'$1Variant1'";
    return {selectedComponent}
  }
};
</script>
' > $1.component.vue

echo '<template>
    <div>Add your component here</div>
</template>

<script lang="ts">
export default {
  setup(){
      return {};
  }  
};
</script>
' > $1Variant1.vue


