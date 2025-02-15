You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

From <https://leetcode.com/problems/house-robber-ii/description/> 



class Solution {
public:
int solve(int n,vector<int>&nums,vector<int>&dp){
    if(n>=nums.size()){
       return 0;
    }
    if(dp[n]!=-1){
        return dp[n];
    }
    int x=solve(n+2,nums,dp)+nums[n];
    int y=solve(n+1,nums,dp);
    dp[n]=max(x,y);
    return dp[n];
}
    int rob(vector<int>& nums) {
  
  if(nums.size()==1){
    return nums[0];
  }
        int n=nums.size();
        vector<int>dp(n+1,-1);
        vector<int>temp1,temp2;
        for(int i=0;i<nums.size();i++){
            if(i!=0)
            temp1.push_back(nums[i]);
            if(i!=nums.size()-1){
                temp2.push_back(nums[i]);
            }
        }
        int ans=solve(0,temp1,dp);
        vector<int>dp2(temp2.size()+1,-1);
        int ans2=solve(0,temp2,dp2);
        return max(ans,ans2);;
    }
};

