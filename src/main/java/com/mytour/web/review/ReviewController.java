package com.mytour.web.review;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mytour.web.mapper.ReviewMapper;
import com.mytour.web.proxy.Inventory;




@RestController
@RequestMapping("/review")
public class ReviewController {
	@Autowired
	ReviewMapper reviewMapper;

	@Autowired
	Inventory<Review[]> inventory;
	@Autowired
	ReviewProxy reviewProxy;
	@Autowired
	FileProxy fileProxy;
	@Autowired
	Comment comment;
	@Autowired
	Review review;
	@Autowired
	Like like;
	@Autowired
	ReviewDummyProxy reviewDummyProxy;
	@Autowired
	ReviewBestProxy reviewBestProxy;
	@Autowired WordCloudServiceImpl wordCloud;

	

	@GetMapping("/create/table")
	public Map<?, ?> createReview() {
		HashMap<String, String> paramMap = new HashMap<>();
		Consumer<HashMap<String, String>> c = t -> reviewMapper.createReview(paramMap);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}

	@GetMapping("/create/tablelike")
	public Map<?, ?> createLiketo() {
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.put("CREATE_REVIEW", SQL.CREATE_LIKE.toString());
		Consumer<HashMap<String, String>> c = t -> reviewMapper.createReview(paramMap);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}

	@GetMapping("/create/tablecomment")
	public Map<?, ?> createComment() {
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.put("CREATE_REVIEW", SQL.CREATE_COMMENT.toString());
		Consumer<HashMap<String, String>> c = t -> reviewMapper.createReview(paramMap);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}

	@GetMapping("/crawler")
	public ArrayList<HashMap<String, String>> db() {
		return reviewDummyProxy.reviewCrawing();
	}
	


	@GetMapping("/create/likedummy")
	public void likedb() {
		reviewDummyProxy.likedummy();
		reviewDummyProxy.inputlikecnt();

	}

	@GetMapping("/bestsample/{uid}")
	public void bestsample(@PathVariable String uid) {
		reviewBestProxy.userage(uid);

	}

	@GetMapping("/list/{pageNo}")
	public Map<?, ?> list(@PathVariable int pageNo) {
		HashMap<String, List<Review>> map = new HashMap<>();
		reviewProxy.setPageNum(pageNo);
		reviewProxy.paging();
		map.put("review", reviewMapper.reviewlist(reviewProxy));
		return map;
	}

	@GetMapping("/comment/{artseq}")
	public List<Comment> comment(@PathVariable int artseq) {
		Function<Integer,List<Comment>> c = t -> reviewMapper.getcomment(artseq);	
		return c.apply(artseq);
	}

	@GetMapping("/comment/delete/{commentno}")
	public void commentdelete(@PathVariable String commentno) {
		Consumer<String> c=t->reviewMapper.commentdelete(commentno);
		c.accept(commentno);

	}

	@GetMapping("/like/{artseq}/{uid}")
	public Map<?, ?> like(@PathVariable String artseq, @PathVariable String uid) {

		HashMap<String, Integer> map = new HashMap<>();
		like.setArtseq(artseq);
		like.setUid(uid);
		review.setArtseq(artseq);
		Consumer<Like> c=t->reviewMapper.updatelikecheck(like);
		Function<String, Integer> f=t->reviewMapper.likecount(artseq);
		if (reviewMapper.getLike(like) == null) {
			like.setLikecheck("1");
			review.setLikecnt(f.apply(artseq) + 1);
			reviewMapper.insertLike(like);
			reviewMapper.updatelikecnt(review);
		} else if (reviewMapper.getLike(like).getLikecheck().equals("0")) {
			like.setLikecheck("1");
			review.setLikecnt(f.apply(artseq)  + 1);
			c.accept(like);
			reviewMapper.updatelikecnt(review);
		} else if (reviewMapper.getLike(like).getLikecheck().equals("1")) {
			like.setLikecheck("0");
			review.setLikecnt(f.apply(artseq)  - 1);
			reviewMapper.updatelikecnt(review);
			c.accept(like);
		}
		
		map.put("count", f.apply(artseq) );
		return map;
	}

	@GetMapping("/likeimg/{artseq}/{uid}")
	public Map<?, ?> likeimg(@PathVariable String artseq, @PathVariable String uid) {
		HashMap<String, String> map = new HashMap<>();
		like.setArtseq(artseq);
		like.setUid(uid);
		Function<Like, String>f=t->reviewMapper.liked(like);
		map.put("likecheck", f.apply(like));
		return map;
	}

	@GetMapping("/search/{searchword}")
	public Review[] search(@PathVariable String searchword) {
		return reviewMapper.allreviewlist().stream()
				.filter(t -> t.getTitle().contains(searchword) || t.getContent().contains(searchword))
				.toArray(Review[]::new);
	}

	@GetMapping("/delete/{artseq}")
	public String delete(@PathVariable String artseq) {
		
		Consumer<String> c= t->reviewMapper.delete(artseq);
		c.accept(artseq);
		return "success";
	}

	@GetMapping("/firstbest/{uid}")
	public HashMap<String, Object> best(@PathVariable String uid) {
		List<Review> bestreview = reviewMapper.selectbyage(reviewBestProxy.userage(uid)).stream()
				.collect(Collectors.toList());
		Collections.shuffle(bestreview);
		Review[] review = { bestreview.get(0), bestreview.get(1), bestreview.get(2) };
		HashMap<String, Object> map = new HashMap<>();
		map.put("review", review);
		map.put("age", reviewBestProxy.userage(uid));
		return map;
	}

	@GetMapping("/searchbest/{ages}/{gender}")
	public List<Review> searchbest(@PathVariable int ages, @PathVariable String gender) {
		HashMap<String, Object> infomap = new HashMap<>();
		infomap.clear();
		infomap.put("ages", ages);
		infomap.put("endages", ages + 10);
		infomap.put("gender", gender);
		return reviewMapper.selectbyage(infomap).stream().collect(Collectors.toList());

	}

	@GetMapping("/personalbest/{uid}")
	public Review[] personalbest(@PathVariable String uid) {
		Function<String, Integer> f= t->reviewMapper.userlikecnt(uid);
		return f.apply(uid)>5
				?reviewMapper.selectbylike(uid).stream().toArray(Review[]::new)
						:reviewMapper.selectbyage(reviewBestProxy.userage(uid)).stream().toArray(Review[]::new);
	}
	
	@GetMapping("/wordcloud")
	public List<ExtractedWord>  wordcloud() throws Exception {
		return wordCloud.extractor();
	}
	
	@GetMapping("/tourtest")
	public void  tourtest(@PathVariable String spotgu) {

	}

	@PostMapping("/write")
	public Map<?, ?> write(@RequestBody Review param) {

		HashMap<String, String> map = new HashMap<>();
		Consumer<Review> c = s -> reviewMapper.insertReview(param);
		c.accept(param);
		return map;
	}

	@PostMapping("/fileupload/{uid}")
	public void fileupload(MultipartFile[] uploadFile, @PathVariable String uid) {
		review.setUid(uid);
		review.setArtseq(reviewMapper.selectbyuid(review));
		review.setImg(fileProxy.fileupload(uploadFile).get(0));
		Consumer<Review>c = t->reviewMapper.insertIMG(review);
		c.accept(review);

	}

	@PostMapping("/{artseq}/comment")
	public Map<?, ?> comment(@RequestBody Comment param, @PathVariable String artseq) {
		HashMap<String, String> map = new HashMap<>();
		Consumer<Comment> c = s -> reviewMapper.insertComment(param);
		c.accept(param);
		map.put("comment", param.getComments());
		return map;

	}

	   @PostMapping("/update/{artseq}")
	   public Map<?,?> update(@RequestBody Review param, @PathVariable String artseq) {
	      Consumer<Review>c = t->reviewMapper.update(param);
	      c.accept(param);
	      HashMap<String, String> paramMap = new HashMap<>();
	      paramMap.put("msg", "success");
	      return paramMap;
	      
	   }

}
