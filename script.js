const button = document.getElementsByTagName("button");
const wrap = document.getElementsByClassName('wrapper')[0];
// tmp = []
// tmp0 = []
// tmp1 = []

for (i = 0; i < button.length; i++ ) {
    button[i].parentElement.like = 0;
    button[i].addEventListener('click', function() {
        this.parentElement.like++;
        tmp = []
        tmp0 = []
        tmp1 = []
        
        for (j = 0; j < button.length; j++) {
            tmp[tmp.length] = button[j].parentElement.like
            tmp0[tmp0.length] = button[j].parentElement
        }
        tmp.sort(function(a, b){return b - a})

        for (k = 0; k < tmp.length; k++) {
            for (l = 0; l < tmp0.length; l++) {
                if (tmp[k] == tmp0[l].like) {
                    if (tmp1.includes(tmp0[l])) {
                    }
                    else {
                        tmp1[tmp1.length] = tmp0[l]
                    }
                }
            }
        }
        console.log(tmp1)

        // tmp2 = wrap.children
        for (m = 0; m < tmp1.length; ++m) {
            try {
                wrap.replaceChild(tmp1[m], wrap.children[m])}
            catch {
                wrap.appendChild(tmp1[m])
            }
        }
    })
}
