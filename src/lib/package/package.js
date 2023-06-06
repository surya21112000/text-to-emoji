
import { emojiMapping } from "./emojiMapping";



const TextToEmoji = {
  replaceWord: function(value) {
    let transformedText = value;

    Object.entries(emojiMapping).forEach(([emoji, keywords]) => {


      keywords.forEach(keyword => {
        const regex = new RegExp(`(?<!\\*️⃣)\\b${keyword}\\b(?!\\*️⃣)`, 'gi');

        transformedText = transformedText.replace(regex, emoji);
      })
 
    });

    return transformedText;
  },
  

  appendEmoji:function appendEmoji(value) {
 let transformedText = value;
  
    if (transformedText[transformedText.length - 1] === ' ') {
      Object.entries(emojiMapping).forEach(([emoji, keywords]) => {
        keywords.forEach(keyword => {
          const pattern = new RegExp(`\\b${keyword}\\b`, 'gi');
  
          transformedText = transformedText.replace(pattern, match => match + emoji);
        });
      });
  
      transformedText = transformedText.replace(/(\p{Extended_Pictographic})\1+/gu, '$1');
    }
  
    return transformedText;
  }
,  
  

  replaceColon: function(value) {
    let transformedText = value;

    Object.entries(emojiMapping).forEach(([emoji, keywords]) => {


      keywords.forEach(keyword => {
        transformedText = transformedText.replace(new RegExp(`:${keyword}\\b`, 'gi'), `${emoji}`);
      })
      
    });

    return transformedText;
  },


}


export default TextToEmoji;
