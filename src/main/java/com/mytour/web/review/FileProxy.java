package com.mytour.web.review;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.function.BiFunction;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;

import java.io.File;
import java.io.IOException;

@Component
public class FileProxy   {
	
	public List<String> fileupload(MultipartFile[] uploadFile) {
		Regions clientRegion = Regions.DEFAULT_REGION;
        String bucketName = "com.hamuse.s3";
        String stringObjKeyName = "*** String object key name ***";
        String fileObjKeyName = "*** File object key name ***";
        String fileName =  extractedFileName(uploadFile);

        try {
            //This code expects that you have AWS credentials set up per:
            // https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html
            AmazonS3 s3Client = AmazonS3ClientBuilder.standard()
                    .withRegion(clientRegion)
                    .build();

            // Upload a text string as a new object.
            s3Client.putObject(bucketName, stringObjKeyName, "Uploaded String Object");

            // Upload a file as a new object with ContentType and title specified.
            PutObjectRequest request = new PutObjectRequest(bucketName, fileObjKeyName, new File(fileName));
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType("plain/text");
            metadata.addUserMetadata("x-amz-meta-title", "someTitle");
            request.setMetadata(metadata);
            s3Client.putObject(request);
        } catch (AmazonServiceException e) {
            // The call was transmitted successfully, but Amazon S3 couldn't process 
            // it, so it returned an error response.
            e.printStackTrace();
        } catch (SdkClientException e) {
            // Amazon S3 couldn't be contacted for a response, or the client
            // couldn't parse the response from Amazon S3.
            e.printStackTrace();
        }
        
		return null;
	}

	private String extractedFileName(MultipartFile[] uploadFile) {
		String uploadFolder = "52.78.131.165\\resources\\wegoimg\\reviewimg\\";
		File uploadPath = makeDir(uploadFolder, getFolder());
		String name= "";
		if(uploadPath.exists() == false) {
			uploadPath.mkdirs();
		}
		final String s = getFolder();
		for(MultipartFile m : uploadFile) {
			String fname = m.getOriginalFilename();
			String extension = fname.substring(fname.lastIndexOf(".")+1);
			fname = fname.substring(fname.lastIndexOf("\\")+1, fname.lastIndexOf("."));
			File savedFile = makeFile(uploadPath, fname+"-"+UUID.randomUUID().toString()+"."+extension);
			name= fname+"-"+UUID.randomUUID().toString();
			try {
				m.transferTo(savedFile);
			} catch (Exception e) {
				e.printStackTrace();
			} 
		}
		return name;
	}
	
	public String getFolder() {
		return "review";
	}
	public File makeDir(String t, String u) {
		BiFunction<String,String, File> f = File::new;
		return f.apply(t, u);
	}
	public File makeFile(File t, String u) {
		BiFunction<File,String, File> f = File::new;
		return f.apply(t, u);
	}
}