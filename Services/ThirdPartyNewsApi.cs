using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using RestSharp;
using Newtonsoft.Json.Linq;

namespace BusinessNewsReact.Services
{
    public class ThirdPartyNewsApi
    {   /*this method calls the third party api*/
        public JObject ApiCaller()
        {

            var client = new RestClient("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d8cc581f444f452c9ab733156fa04ac9");
            var request = new RestRequest(Method.GET);
           // request.AddHeader("x-rapidapi-key", "38eb8ec6dfmsh34c40b24160db07p1cfb1cjsn673ca15b4a70");
           // request.AddHeader("x-rapidapi-host", "google-news.p.rapidapi.com");
            IRestResponse response = client.Execute(request);
            JObject json = (JObject)response.Content;
            return json;
            
        }
        
        
    }
}
