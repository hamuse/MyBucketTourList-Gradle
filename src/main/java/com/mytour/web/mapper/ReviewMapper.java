package com.mytour.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.mytour.web.review.Comment;
import com.mytour.web.review.Like;
import com.mytour.web.review.Review;
import com.mytour.web.review.ReviewProxy;
import com.mytour.web.user.User;




@Repository
public interface ReviewMapper {
	public void createReview(HashMap<String, String> paramMap);
	public void createLike(HashMap<String, String> paramMap);
	public void createComment(HashMap<String, String> paramMap);
	public void dropReview(HashMap<String, String> paramMap);
	public void truncateReview(HashMap<String, String> paramMap);
	public void insertReview(Review r);
	public List<Review> reviewlist(ReviewProxy pxy);
	public List<Review> allreviewlist();
	public int countCommunity();
	public void insertComment(Comment c);
	public List<Comment> getcomment(int artseq);
	public String selectbyuid(Review r);
	public void insertIMG(Review r);
	public Like getLike(Like l);
	public void insertLike(Like l);
	public void updatelikecnt(Review r);
	public void updatelikecheck(Like l);
	public int likecount(String artseq);
	public String liked(Like l);
	public void delete(String artseq);
	public void update(Review r);
	public void commentdelete(String commentno);
	public List<String> uidlist();
	public List<String> artseqlist();
	public List<Review> likeinfo();
	public User selectbyId(String uid);
	public List<Review>selectbyage(HashMap<String, Object> map);
	public List<Review>selectbylike(String uid);
	public int userlikecnt(String uid);




}
