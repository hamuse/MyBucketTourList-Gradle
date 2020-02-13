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
public class Like {
		private String likeno,artseq, uid,likecheck;
		
		
}

