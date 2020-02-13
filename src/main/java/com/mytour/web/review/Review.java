package com.mytour.web.review;

import java.util.ArrayList;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
@Lazy
public class Review {
		private String artseq,img, uid,  title, content,tag;
		private int likecnt;

}
