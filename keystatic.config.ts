import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
  repo: "Kgp-27/krishnas-knowledge-journal",
  },

  collections: {
    articles: collection({
      label: "Articles",
      slugField: "title",
      path: "src/content/articles/*",
      format: { contentField: "content" },

      schema: {
        title: fields.text({
          label: "Title",
        }),

        description: fields.text({
          label: "Description",
        }),

        topic: fields.text({
          label: "Topic",
        }),

        tags: fields.array(
          fields.text({
            label: "Tag",
          }),
          {
            label: "Tags",
          }
        ),

        pubDate: fields.date({
          label: "Publication Date",
        }),

        featured: fields.checkbox({
          label: "Featured",
        }),

        draft: fields.checkbox({
          label: "Draft",
        }),

        content: fields.markdoc({
          label: "Content",
        }),
      },
    }),
  },
});