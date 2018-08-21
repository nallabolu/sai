using System;

Namespace Sys
{
    class ES
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
        public int MyProperty { get; set; }

        private int myVar;
        public int MyProperty
        {
            get { return myVar;}
            set { myVar = value;}
        }
        
    }
}