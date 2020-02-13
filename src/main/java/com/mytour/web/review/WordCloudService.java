package com.mytour.web.review;


import java.util.List;


import org.springframework.stereotype.Component;


@Component
public interface WordCloudService {

	public List<ExtractedWord>   extractor();

}
