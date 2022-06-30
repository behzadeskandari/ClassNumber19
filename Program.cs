
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Pipes;
using System.Linq;
using System.Linq.Expressions;
using System.Net.Sockets;
using System.Security.Cryptography;
//using Newtonsoft.Json;

namespace ClassNumber18
{
    public class Program
    {

        static void Main(string[] args)
        {
            var t = MD5.Create();
            SHA1 sha1 = SHA1.Create();
            SHA256 sHA256 = SHA256.Create("behzad");

            var t2 = "vehzad".GetHashCode();
            var t22= t2.CompareTo(t);  
          
            Console.WriteLine(sHA256.Hash); ;
        
        }
        

    }


}
