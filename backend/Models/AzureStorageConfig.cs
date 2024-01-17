using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class AzureStorageConfig
    {
        public required string AccountName { get; set; }
        public required string AccountKey { get; set; }
        public required string EndpointSuffix { get; set; }
        public required string ConnectionString { get; set; }

    }
}