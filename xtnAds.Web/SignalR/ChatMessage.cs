using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Runtime.Serialization;

namespace xtnAds.Web.SignalR
{
    [DataContract]
    public class ChatMessage 
    {
        [DataMember(Name = "messageType")]
        public int MessageType { get; set; }
        [DataMember(Name = "text")]
        public string Text { get; set; }
        [DataMember(Name = "from")]
        public string From { get; set; }
    }
}