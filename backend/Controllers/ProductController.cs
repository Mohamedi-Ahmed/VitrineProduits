using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
    private readonly ILogger<HomeController> _logger;
	private readonly ProductsDatabaseContext _context;

    public ProductController(ILogger<HomeController> logger, ProductsDatabaseContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index()
    {
        return Ok();
    }
    }
}