package com.mytour.web.review;


import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

import org.snu.ids.kkma.index.Keyword;
import org.snu.ids.kkma.index.KeywordExtractor;
import org.snu.ids.kkma.index.KeywordList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class WordCloudServiceImpl implements WordCloudService {
   @Autowired ReviewCrawling reviewCrawling;
   @Autowired ExtractedWord word;
   @Autowired List<ExtractedWord> list;
   


   @Override
   public List<ExtractedWord> extractor() {
      KeywordExtractor ke = new KeywordExtractor();
      KeywordList kl =  ke.extractKeyword(reviewCrawling.crawlingurl().toString(), true);
      list.clear();
      for (Keyword kwrd:kl) {            
            word = new ExtractedWord();
            word.setKey(kwrd.getString());
            word.setCnt(kwrd.getCnt());
            list.add(word);   
             
      }
      List<String> removewords=Arrays.asList("서울","석간","복지","지원","공고","모집","시설","가을");
      Iterator<String> r= removewords.iterator();
      list.removeIf(word->word.getKey().length()<2||word.getCnt()<3||word.getCnt()>15);
      for(String a: removewords) {
         list.removeIf(word->word.getKey().equals(a));
      }

      return list ;
   }
   
}