'use strict';

(($) => {
  new Vue({
    el: '#juno_okyo',
    data: {
      saved: false,
      focus: false,
      loading: false,
      message: '',
      images: ''
    },
    methods: {
      onSubmit() {
        this.saved = false;
        this.loading = true;

        let data = new FormData();
        data.append('entry.1150758620', this.message);
        
        // attach images
        if (this.images.length > 5) {
          data.append('entry.1691397039', this.images);
        }

        fetch('https://docs.google.com/forms/d/e/1FAIpQLSeIW9fIx7VTrrwom4hwpGo9sk7iYakKATtfJD1QIzBTgfgoWw/formResponse?embedded=true', {
          method: 'post',
          body: data
        }).finally(() => {
          this.saved = true;
          this.message = '';
          this.images = '';
          $('#message').focus();

          this.loading = false;
        });
      }
    },
    mounted() {
      this.focus = true;
    }
  });
})(jQuery);