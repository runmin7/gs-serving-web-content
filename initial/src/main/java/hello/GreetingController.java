package hello;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class GreetingController {

    @GetMapping("/greeting")
    public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        return "greeting";
    }

    @GetMapping("/jqgrid")
    public String jqgrid(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        return "jqgrid";
    }

    @GetMapping("/keypress")
    public String keypress(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        return "keypress";
    }

    @GetMapping("/accodion")
    public String accodion(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        return "accodion";
    }

    @GetMapping("/css1")
    public String css1(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        return "css1";
    }

    @GetMapping("/arrays")
    public String arrays(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        return "arrays";
    }

    @GetMapping("/func1")
    public String func1(@RequestParam(name="name", required=false, defaultValue="World") String[] name, Model model) {
        model.addAttribute("name", name);
        return "arrays";
    }
    @GetMapping("/fullcalendar")
    public String fullcalendar(@RequestParam(name="name", required=false, defaultValue="World") String[] name, Model model) {
        model.addAttribute("name", name);
        return "fullcalendar";
    }



}