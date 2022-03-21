export async function onBeforeRender(pageContext: any) {
  const movie = "This is the movie";

  return {
    pageContext: {
      pageProps: {
        movie,
      },
    },
  };
}

export const passToClient = ["pageProps"];
