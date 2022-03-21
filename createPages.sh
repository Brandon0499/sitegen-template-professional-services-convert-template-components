cd pages
mkdir $1
cd $1
touch index.page.server.ts
touch index.page.vue

echo "export async function onBeforeRender(pageContext: any) {
  const movie = 'This is the movie';
   // Pass data that you want to pass in the front end into pageProps:{}
  return {
    pageContext: {
      pageProps: {
        movie,
      },
    },
  };
}
export const passToClient = ['pageProps'];
" > index.page.server.ts


echo "<template>
  <!-- New Page Here -->
  <div></div>
</template>

<script lang='ts'>
// pageProps are data that you pass from index.page.server.ts
const pageProps = ['movie'];
export default {
  props: pageProps,
  components: {},
  setup(props: any) {
    console.log(props['movie']);
  },
};
</script>" > index.page.vue






