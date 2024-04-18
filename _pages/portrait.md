---
title: "Ribo centre - Portrait"
layout: piclay
excerpt: "Ribo centre -- Portrait"
permalink: /portrait/
---
<!-- <html>
<body>
<div class="container-fluid">
  <div class="row">
  <div class="col-xs-12">
  <div id="app"></div>
  <script src="https://unpkg.com/vue@latest/dist/vue.global.prod.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue3-sfc-loader"></script>
  <script>   
    const options = {
      moduleCache: {
        vue: Vue,
      },      
      async getFile(url) {
        return fetch(url).then(response => response.ok ? response.text() : Promise.reject(response));
      },      
      addStyle(styleStr) {
        const style = document.createElement('style');
        style.textContent = styleStr;
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
      },      
      log(type, ...args) {
        console.log(type, ...args);
      }
    }    
    const { loadModule, version } = window["vue3-sfc-loader"];   
    const app = Vue.createApp({
      components: {
        'my-component': Vue.defineAsyncComponent(() => loadModule('{{ site.url }}{{ site.baseurl }}/vue/brainArea.vue', options)),
      },
      template: `Hello <my-component></my-component> <sub>from vue3-sfc-loader v${ version }</sub>`
    });    
    app.mount('#app');
  </script>
</body>
</html> -->


<html>
<body>
  <div id="app"></div>
  <script src="https://unpkg.com/vue@latest/dist/vue.global.prod.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue3-sfc-loader"></script>
  <script type="module">
    import * as sass from 'https://jspm.dev/sass'
    import { loadModule } from 'https://cdn.jsdelivr.net/npm/vue3-sfc-loader/dist/vue3-sfc-loader.esm.js'
    const files = {
        '{{ site.url }}{{ site.baseurl }}/vue/brainArea.vue':`
          <style lang="scss" scoped>
            .brain-wrap {
              position: relative;
              z-index: 2;
              width: 1000px;
              transform: scale(0.7);
              height: 700px;
              margin: 0 auto;
              transition: all 0.3s;
              #imgMap,
              .img-bg,
              .brain-img {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 0;
                height: 100%;
              }
              .line {
                z-index: 99;
              }
              #imgMap {
                z-index: 333;
              }
              area {
                cursor: pointer;
              }
              .nav-list {
                position: absolute;
                z-index: 999;
                &.cerebral-list {
                  top: 6px;
                  left: 988px;
                }
                &.frontal-list {
                  top: -30px;
                  left: 1208px;
                }
                &.prefrontal-list {
                  top: 156px;
                  left: 1208px;
                }
                &.brainstem-list {
                  bottom: 17px;
                  left: 742px;
                }
                &.deep-list {
                  top: 18px;
                  left: -210px;
                }
              }
              .brain-nav {
                width: 100%;
                li {
                  position: absolute;
                  z-index: 999;
                  font-size: 14px;
                  background: #eff5ff;
                  color: #406b9b;
                  cursor: pointer;
                  padding: 10px 0px;
                  border-radius: 4px;
                  min-width: 140px;
                  text-align: center;
                  border: 1px solid #d9e1f1;
                  font-weight: bold;
                  line-height: 1.2em;
                  &:hover,
                  &.actived {
                    background: #3a5c93;
                    color: #fff;
                  }
                  &#nav_1 {
                    left: 606px;
                    top: 547px;
                  }
                  &#nav_2 {
                    left: 30px;
                    top: 223px;
                  }
                  &#nav_3 {
                    left: 846px;
                    top: 145px;
                  }
                  &#nav_4 {
                    left: 318px;
                    top: 10px;
                  }
                  &#nav_5 {
                    left: 70px;
                    top: 486px;
                  }
                  &#nav_6 {
                    left: 480px;
                    top: 658px;
                  }
                }
                &.cerebral-nav {
                  background: url("~/assets/brain/dark/Cerebral cortex（线）.png") left
                    no-repeat;
                  background-size: auto 90%;
                  min-width: 256px;
                  height: 320px;
                  position: relative;
                  li {
                    left: 82px;
                    &.nav_3_0 {
                      top: 0px;
                    }
                    &.nav_3_1 {
                      top: 88px;
                    }
                    &.nav_3_2 {
                      top: 189px;
                    }
                    &.nav_3_3 {
                      top: 283px;
                    }
                    // &.nav_3_4 {
                    //   top: 286px;
                    // }
                  }
                }
                &.frontal-nav {
                  background: url("~/assets/brain/dark/Parietal lobe-Motor cortex.png")
                    left no-repeat;
                  background-size: auto 70%;
                  min-width: 200px;
                  height: 120px;
                  position: relative;
                  li {
                    left: 70px;
                    &.nav_31_0 {
                      top: 0px;
                    }
                    &.nav_31_1 {
                      top: 75px;
                    }
                  }
                }
                &.prefrontal-nav {
                  background: url("~/assets/brain/dark/Somatosensory.png") left center
                    no-repeat;
                  min-width: 200px;
                  height: 120px;
                  position: relative;
                  li {
                    left: 60px;
                    padding: 4px 0px;
                    &.nav_32_0 {
                      top: 35px;
                    }
                  }
                }
                &.brainstem-nav {
                  background: url("~/assets/brain/dark/Brainstem（线）.png") left no-repeat;
                  background-size: auto 70%;
                  width: 140px;
                  height: 230px;
                  // left: 638px;
                  // top: -360px;
                  position: relative;
                  li {
                    left: 60px;
                    &.nav_1_0 {
                      top: 22px;
                    }
                    &.nav_1_1 {
                      top: 96px;
                    }
                    &.nav_1_2 {
                      top: 170px;
                    }
                  }
                }
                &.deep-nav {
                  background: url("~/assets/brain/dark/deep structures（线）.png") right
                    no-repeat;
                  background-size: auto 100%;
                  width: 240px;
                  height: 450px;
                  // top: -146px;
                  // left: 844px;
                  position: relative;
                  li {
                    left: 10px;
                    &.nav_2_0 {
                      top: -22px;
                    }
                    &.nav_2_1 {
                      top: 26px;
                    }
                    &.nav_2_2 {
                      top: 75px;
                    }
                    &.nav_2_3 {
                      top: 126px;
                    }
                    &.nav_2_4 {
                      top: 176px;
                    }
                    &.nav_2_5 {
                      top: 230px;
                    }
                    &.nav_2_6 {
                      top: 284px;
                    }
                    &.nav_2_7 {
                      top: 333px;
                    }
                    &.nav_2_8 {
                      top: 382px;
                    }
                    &.nav_2_9 {
                      top: 430px;
                    }
                  }
                }
            }
          }
          </style> `
    };
    const options = {
      moduleCache: {
        vue: Vue,
      },
      async getFile(url) {        
        if ( files[url] )
          return files[url];
      },
      async processStyles(src, lang, filename, options) {
        if ( lang !== 'scss' )
          throw new Error(`unsupported "${ lang }" style processor`);       
        const sassDepImporter = {
          canonicalize: str => new URL(str, 'file:'),
          load: async url => {
            const res = options.getResource({ refPath: filename, relPath: url.pathname }, options);
            const content = await res.getContent();
            return {
              contents: await content.getContentData(false),
              syntax: content.type.slice(1), // content.type is the file extension, then just strip the "."
            };
          },
        };
        try {
          const compiled = await sass.compileStringAsync(src, {
            importers: [sassDepImporter],
          });  
          return compiled.css;
        } catch(ex) {
          options.log('error', ex.message);
          return undefined;
        }
      },
      addStyle(styleStr) {
        console.log("addStyle", styleStr)
        const style = document.createElement('style');
        style.textContent = styleStr;
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
      },
      log(type, ...args) {
        console[type](...args);
      },
    }
    const { loadModule, version } = window["vue3-sfc-loader"];   
    const app = Vue.createApp({
      components: {
        'my-component': Vue.defineAsyncComponent(() => loadModule('{{ site.url }}{{ site.baseurl }}/vue/brainArea.vue', options)),
      },
      template: `Hello <my-component></my-component> <sub>from vue3-sfc-loader v${ version }</sub>`
    });    
    app.mount('#app');
</script>
</body>
</html>