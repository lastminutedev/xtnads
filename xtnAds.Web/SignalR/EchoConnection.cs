using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Routing;
using Html.Helpers;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;

namespace xtnAds.Web.SignalR
{
    public class EchoConnection : PersistentConnection
    {
        private static int connections = 0;

        public static void InitRoute()
        {
            RouteTable.Routes.MapConnection<EchoConnection>(name: "chatservice", url: "/chat", configuration: new ConnectionConfiguration { EnableCrossDomain = true });
        }

        protected override Task OnReceived(IRequest request, string connectionId, string data)
        {
            var message = JsonConvert.DeserializeObject<ChatMessage>(data);
            var userName = HtmlSanitizer.sanitize(message.From);
            var text = HtmlSanitizer.sanitize(message.Text);

            if (String.IsNullOrEmpty(message.Text))
            {
                return null;
            }

            StringBuilder sb = new StringBuilder("<strong>");
            sb.Append(userName);
            sb.Append(" says</strong>");
            sb.Append(": ");
            sb.Append(text);
            sb.Append("\n");

            return this.Connection.Broadcast(sb.ToString());
        }

        //protected override Task OnReconnected(IRequest request, string connectionId)
        //{
        //    Interlocked.Increment(ref connections);
        //    var msg = this.GetUsersCountMessage(connections);
        //    return this.Connection.Broadcast(msg);
        //}

        //protected override Task OnConnected(IRequest request, string connectionId)
        //{
        //    Interlocked.Increment(ref connections);
        //    var msg = this.GetUsersCountMessage(connections);
        //    return this.Connection.Broadcast(msg);
        //}

        //protected override Task OnDisconnected(IRequest request, string connectionId)
        //{
        //    Interlocked.Decrement(ref connections);
        //    var msg = this.GetUsersCountMessage(connections);
        //    return this.Connection.Broadcast(msg);
        //}

        //private string GetUsersCountMessage(int count)
        //{
        //    StringBuilder sb = new StringBuilder("<p style='font-style: italic; color: #14256b'>Users online: ");
        //    sb.Append(count);
        //    sb.Append("</p>");

        //    return sb.ToString();
        //}
    }
}