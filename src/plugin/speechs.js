import Vue from 'vue'

Vue.prototype.$speech = {
    text: function(cb) {
        window.SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        const recognition = new SpeechRecognition();

        recognition.lang = "zh-CN";
        recognition.interimResults = true;
        recognition.continuous = true;
        recognition.maxAlternatives = 5;

        let speech = '',
            speechs = [],
            timerId;

        recognition.onresult = event => {
            // console.log(event)
            speech = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join("");

            cb(speech, false);
            console.log("[run] ->", speech);

            // clearTimeout(timerId)
            // timerId = setTimeout(() => {
            //     recognition.stop();
            //     // recognition.start();
            // }, 1000 * 5);
        };

        recognition.onend = event => {
            // console.log(event)
            // if (this.speech !== "") {
            // 	this.transcription.push(this.speech);

            // 	this.$emit("onTranscriptionEnd", {
            // 		transcription: this.transcription,
            // 		lastSentence: this.runtimeTranscription
            // 	});
            // }
            speechs.push(speech);
            // this.speech = "";
            // speak(`结果是...${speech}`);
            console.log("[end] ->", speech);
            cb(speech, true);
            // speech = '';
            recognition.start();
        };

        recognition.onspeechstart = function() {
            console.log('Speech has been detected');
        }

        recognition.onnomatch = function() {
            console.log('Speech not recognised');
        }

        recognition.onerror = function(event) {
            console.log('Speech recognition error detected: ' + event.error);
            // recognition.start();
        }

        recognition.onsoundend = function() {
            console.log('Sound has stopped being received');
        }

        recognition.onaudiostart = function() {
            console.log('Audio capturing started');
        }

        recognition.onaudioend = function() {
            console.log('Audio capturing ended');
        }

        recognition.start();
    },
    speak: function(text) {
        //创建一个 SpeechSynthesisUtterance的实例
        var newUtterance = new SpeechSynthesisUtterance();

        // 设置文本
        newUtterance.text = text;

        // 添加到队列
        window.speechSynthesis.speak(newUtterance);
    }
}