package Experiment_Jen.Jenexp;

import org.testng.Assert;
import org.testng.annotations.Test;

public class ClassA {
	
	@Test
	
	public void TestA() {
		
		System.out.println("TestA Pass");
	}
@Test
	public void TestB()
	{
		
		System.out.println("test B Failed");
		Assert.assertTrue(false);
	}
}
