const moreClick = {
  methods: {
    onNewsMoreClick() {
      const type = this.$route.name;

      this.$router.push(`/list/news/${type}`);
    },

    onExpertMoreClick() {
      const type = this.$route.name;

      this.$router.push(`/list/expert/${type}`);
    },

    onPaperMoreClick() {
      const type = this.$route.name;

      this.$router.push(`/list/paper/${type}`);
    },

    onOrgMoreClick() {
      const type = this.$route.name;

      this.$router.push(`/list/org/${type}`);
    }
  }
};

export default moreClick;
