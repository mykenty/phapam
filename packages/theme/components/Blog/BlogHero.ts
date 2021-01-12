import Vue from "vue";
import MyTransition from "@theme/components/MyTransition.vue";

export default Vue.extend({
  name: "BlogHero",

  components: { MyTransition },

  computed: {
    heroImageStyle(): Record<string, string> {
      const defaultStyle = {
        maxHeight: "180px",
        margin:
          this.$frontmatter.showTitle === false
            ? "6rem auto 1.5rem"
            : "1rem auto",
      };

      return {
        ...defaultStyle,
        ...(this.$frontmatter.heroImageStyle as Record<string, string>),
      };
    },

    bgImageStyle(): Record<string, string> {
      const defaultBgImageStyle: Record<string, string> = {
        height: "350px",
        textAlign: "center",
        overflow: "hidden",
      };
      const { bgImageStyle = {} } = this.$frontmatter;

      const newStyle: Record<string, string> = {
        color: "#e04887",
      };

      return {
        ...defaultBgImageStyle,
        ...(bgImageStyle as Record<string, string>),
        ...newStyle,
      };
    },
  },
});
